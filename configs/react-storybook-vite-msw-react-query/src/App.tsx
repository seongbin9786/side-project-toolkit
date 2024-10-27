import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

import { ReactQueryClientProvider } from './ReactQueryClientProvider';

// route element
const Page = () => "this is a page component.";

const App = () => (
  <ReactQueryClientProvider>
    <BrowserRouter>
      <Page />
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </ReactQueryClientProvider>
);

export default App;
