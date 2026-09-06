import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { request } from 'graphql-request';
import { vi } from 'vitest';
import App from './App';

vi.mock('graphql-request', async (importOriginal) => ({
  ...(await importOriginal()),
  request: vi.fn(),
}));

function renderCatalogue() {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false, cacheTime: 0 } } });
  return render(<QueryClientProvider client={client}><App /></QueryClientProvider>);
}

test('loads and displays a product through the query provider', async () => {
  request.mockResolvedValue({ products: { edges: [{ node: {
    id: 'soap-1', name: 'Honey Soap', seoTitle: '', slug: 'honey-soap', rating: 5,
    collections: [{ name: 'Soap' }], media: [{ url: 'https://example.com/soap.jpg' }],
    description: JSON.stringify({ blocks: [] }),
  } }] } });
  renderCatalogue();
  expect(screen.getByText('Is Loading...')).toBeInTheDocument();
  expect(await screen.findByText('Honey Soap')).toBeInTheDocument();
  expect(screen.getByAltText('LUSH')).toBeInTheDocument();
});

test('shows a failed product request', async () => {
  request.mockRejectedValue(new Error('Catalogue unavailable'));
  renderCatalogue();
  expect(await screen.findByText('Catalogue unavailable')).toBeInTheDocument();
});
