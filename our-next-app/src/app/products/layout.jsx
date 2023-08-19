export default function ProductLayout({ children }) {
  return (
    <html lang="en">
          <body>
              <ul>
                <li>Just Product Header 1</li>
                <li>Just Product Header 1</li>
                <li>Just Product Header 1</li>
              </ul>
                  <main>{children}</main>
              <ul>
                <li>Footer 1</li>
                <li>Footer 1</li>
                <li>Footer 1</li>
              </ul>
          </body>

    </html>
  )
}
