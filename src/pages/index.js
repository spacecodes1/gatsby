import React from "react"
import Layout from "../components/layout"
import LeafletMap from "../components/leafletmap"

const posGPS ="49.3015556335449,1.0316807031631"

const IndexPage = () => (
  <Layout>
    <section style={{ "margin": "0.5rem 1rem" }}>
      <p>Trying a Web Page with GPS Tracker integration</p>
    </section>

    {typeof window !== 'undefined' &&
        <LeafletMap
          position={49.3015556335449,1.0316807031631}
          zoom={15}
          markerText={posGPS}
        />
    }

  </Layout>
  )

  export default IndexPage
