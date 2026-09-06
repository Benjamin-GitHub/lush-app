import React from "react";
import Header from "../Components/Header";
import ProductCard from "../Components/ProductCards";
import Footer from "../Components/Footer"
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

const endpoint = "https://twstg2.eu.saleor.cloud/graphql/";

const PRODUCTS_QUERY = gql`
{
  products(channel: "uk", first: 20) {
    totalCount
    edges {
      node {
        id
        name
        rating
        collections{name}
        description
        slug
        created
        media {url}
        category {
          description
        }
        seoTitle
        seoDescription
      }
    }
  }
}
`;

export default function Home() {
  const { data, isLoading, error } = useQuery("products", () => {
    return request(endpoint, PRODUCTS_QUERY);
  });
if(isLoading) return "Is Loading...";
if(error) return <pre>{error.message}</pre>;

  // const [products, setProducts] = React.useState([]);

  // React.useEffect(() => {
  //   fetch(endpoint, {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({ query: PRODUCTS_QUERY }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data.data.products.edges));
  // }, []);

  // console.log(parseInt(data.products.edges[1].node.rating));

  return (
    <div>
      <Header />
      <ProductCard products={data.products.edges} />
      <Footer />
    </div>
  );
}
