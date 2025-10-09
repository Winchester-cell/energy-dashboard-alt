import 'simplebar-react/dist/simplebar.min.css';
import "leaflet/dist/leaflet.css";
import '@xyflow/react/dist/style.css';
import "@/styles/globals.css";
import "@/styles/cardStyle.css";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
