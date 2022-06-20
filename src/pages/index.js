import React from "react"
import Layout from "../components/layout"
import LeafletMap from "../components/leafletmap"

const task = await env.TodoList.get("spacecodes:GPS");

const IndexPage = () => (
  <Layout>
    <section style={{ "margin": "0.5rem 1rem" }}>
      <p>Trying a Web Page with GPS Tracker integration</p>
    </section>

    {typeof window !== 'undefined' &&
        <LeafletMap
          position={15,-1}
          zoom={15}
          markerText={task}
        />
    }

  </Layout>
  )

  export default IndexPage
