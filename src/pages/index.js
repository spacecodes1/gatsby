import React from "react"
import Layout from "../components/layout"
import LeafletMap from "../components/leafletmap"

const IndexPage = () => (
  <Layout>
    <section style={{ "margin": "0.5rem 1rem" }}>
      <p>Trying a Web Page with GPS Tracker integration</p>
      <p>For more information see <a href="https://www.andrewl.net/article/gatsby-geo-simple-map">https://www.andrewl.net/article/gatsby-geo-simple-map</a></p>
    </section>

    {typeof window !== 'undefined' &&
        <LeafletMap
          position={[49.3015556335449,1.0316807031631]}
          zoom={15}
          markerText={"Hello, this is a test marker"}
        />
    }

  </Layout>
  )

  export default IndexPage
