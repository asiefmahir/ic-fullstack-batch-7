import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './App.css';
import MainRouter from './router/Router';
import CartProvider from './contexts/Cart';
import AuthProvider from './contexts/Auth';

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AuthProvider>
          <CartProvider>
            <MainRouter>
              <App />
            </MainRouter>
          </CartProvider>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
