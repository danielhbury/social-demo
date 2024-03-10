import Store from '../src/app/Store';
import '../src/app/globals.css'
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <header
        style={{
          height: '50px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'coral',
          color: 'white',
          fontSize: '24px'
        }}
      >
        <h4>Social Demo</h4>
      </header>
      <Component {...pageProps} />
    </Store>
  )
}
