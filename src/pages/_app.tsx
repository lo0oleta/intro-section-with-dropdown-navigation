import { ChakraProvider } from "@chakra-ui/react";
import { Epilogue } from "next/font/google";
import { AppProps } from "next/app";
import theme from "@/theme";

const epilogue = Epilogue({
  weight: ["500", "700"],
  subsets: ["latin"],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <main className={epilogue.className}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}

export default App;
