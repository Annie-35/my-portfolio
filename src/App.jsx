function App() {
  return (
    <div style={{ fontFamily: "Times New Roman, sans-serif", maxWidth: "860px", margin: "0 auto", color: "#1a1a1a" }}>

      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem", borderBottom: "1px solid #adc924", position: "sticky", top: 0, background: "#10b15e", zIndex: 10 }}>
        <span style={{ fontWeight: "600" }}>Ann <span style={{ color: "#151615" }}>Gichuhi</span></span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="#about" style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}>About</a>
          <a href="#skills" style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}>Skills</a>
          <a href="#projects" style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}>Projects</a>
          <a href="#gallery" style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}>Gallery</a>
          <a href="#contact" style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}>Contact</a>
        </div>
        <a href="#contact" style={{ background: "#9a1476", color: "#c3cb18", padding: "6px 16px", borderRadius: "6px", fontSize: "13px", textDecoration: "none" }}>Get in touch</a>
      </nav>

      {/* Hero */}
      <section style={{ padding: "4rem 2rem", borderBottom: "1px solid #e5e5e5" }}>
        <span style={{ background: "#2cc31b", color: "#27500A", fontSize: "12px", padding: "4px 12px", borderRadius: "6px", border: "1px solid #C0DD97" }}>Geomatics Engineer · Kenya</span>
        <h1 style={{ fontSize: "2.2rem", fontWeight: "600", marginTop: "1rem", lineHeight: "1.2" }}>Mapping the ground, <span style={{ color: "#3B6D11" }}>building what's next.</span></h1>
        <p style={{ marginTop: "1rem", color: "#555", fontSize: "15px", lineHeight: "1.7", maxWidth: "500px" }}>I'm Ann Gichuhi — a geomatics engineer with expertise in surveying, GIS & remote sensing, and civil construction projects across Kenya.</p>
        <div style={{ marginTop: "1.5rem", display: "flex", gap: "12px" }}>
          <a href="#contact" style={{ background: "#3B6D11", color: "#fff", padding: "10px 20px", borderRadius: "6px", fontSize: "14px", textDecoration: "none" }}>Work with me</a>
          <a href="#about" style={{ border: "1px solid #3B6D11", color: "#3B6D11", padding: "10px 20px", borderRadius: "6px", fontSize: "14px", textDecoration: "none" }}>About me</a>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "3rem 2rem", borderBottom: "1px solid #e5e5e5" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#3B6D11" }}>About</p>
        <h2 style={{ fontSize: "1.6rem", fontWeight: "600", marginTop: "0.4rem" }}>A multidisciplinary geomatics engineer.</h2>
        <p style={{ marginTop: "1rem", color: "#555", fontSize: "15px", lineHeight: "1.8", maxWidth: "600px" }}>I'm Ann Gichuhi, a geomatics engineer passionate about turning spatial data into decisions that shape the built environment. I hold a <strong>BSc. Geomatic Engineering & GIS</strong> from DeKUT (2025), with hands-on experience in engineering surveying, land surveying, GIS & remote sensing, and civil works.</p>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: "3rem 2rem", borderBottom: "1px solid #e5e5e5", background: "#f9faf7" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#3B6D11" }}>What I do</p>
        <h2 style={{ fontSize: "1.6rem", fontWeight: "600", marginTop: "0.4rem" }}>Core skills</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", marginTop: "1.5rem" }}>
          {[
            { title: "Engineering Surveying", desc: "Setting out, control networks, monitoring." },
            { title: "Land Surveying", desc: "Cadastral, topographic and boundary surveys." },
            { title: "GIS & Remote Sensing", desc: "Spatial analysis, mapping, satellite imagery." },
            { title: "Civil Works", desc: "Construction project support and site engineering." },
          ].map((skill) => (
            <div key={skill.title} style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "10px", padding: "1.2rem" }}>
              <h3 style={{ fontSize: "14px", fontWeight: "600", color: "#3B6D11" }}>{skill.title}</h3>
              <p style={{ fontSize: "12px", color: "#555", marginTop: "6px", lineHeight: "1.5" }}>{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "3rem 2rem", borderBottom: "1px solid #e5e5e5" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#3B6D11" }}>Work</p>
        <h2 style={{ fontSize: "1.6rem", fontWeight: "600", marginTop: "0.4rem" }}>Projects</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginTop: "1.5rem" }}>
          {[
            { tag: "GIS", title: "Spatial Analysis — Nairobi", desc: "Land use mapping and spatial analysis using satellite imagery and GIS tools." },
            { tag: "Surveying", title: "Cadastral Survey", desc: "Boundary demarcation and cadastral documentation for a residential development." },
            { tag: "Civil Works", title: "Construction Setting Out", desc: "Engineering setting out and as-built surveys for a construction project in Kenya." },
          ].map((project) => (
            <div key={project.title} style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "10px", padding: "1.2rem" }}>
              <span style={{ background: "#EAF3DE", color: "#27500A", fontSize: "11px", padding: "3px 10px", borderRadius: "6px" }}>{project.tag}</span>
              <h3 style={{ fontSize: "14px", fontWeight: "600", marginTop: "0.75rem" }}>{project.title}</h3>
              <p style={{ fontSize: "12px", color: "#555", marginTop: "6px", lineHeight: "1.5" }}>{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "3rem 2rem", borderBottom: "1px solid #e5e5e5" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#3B6D11" }}>Work</p>
        <h2 style={{ fontSize: "1.6rem", fontWeight: "600", marginTop: "0.4rem" }}>Projects</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginTop: "1.5rem" }}>
          {[
            { tag: "GIS", title: "Spatial Analysis — Nairobi", desc: "Land use mapping and spatial analysis using satellite imagery and GIS tools." },
            { tag: "Surveying", title: "Cadastral Survey", desc: "Boundary demarcation and cadastral documentation for a residential development." },
            { tag: "Civil Works", title: "Construction Setting Out", desc: "Engineering setting out and as-built surveys for a construction project in Kenya." },
          ].map((project) => (
            <div key={project.title} style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "10px", padding: "1.2rem" }}>
              <span style={{ background: "#EAF3DE", color: "#27500A", fontSize: "11px", padding: "3px 10px", borderRadius: "6px" }}>{project.tag}</span>
              <h3 style={{ fontSize: "14px", fontWeight: "600", marginTop: "0.75rem" }}>{project.title}</h3>
              <p style={{ fontSize: "12px", color: "#555", marginTop: "6px", lineHeight: "1.5" }}>{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" style={{ padding: "3rem 2rem", background: "#f9faf7" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#3B6D11" }}>Gallery</p>
        <h2 style={{ fontSize: "1.6rem", fontWeight: "600", marginTop: "0.4rem" }}>Work Samples</h2>
        <div style={{ marginTop: "1.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          {/* Gallery items would go here */}
        </div>
      </section>
{/* Gallery */}
      <section id="gallery" style={{ padding: "3rem 2rem", borderBottom: "1px solid #e5e5e5" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#3B6D11" }}>Gallery</p>
        <h2 style={{ fontSize: "1.6rem", fontWeight: "600", marginTop: "0.4rem" }}>Field & GIS work</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginTop: "1.5rem" }}>
          {[
            { title: "Topographic Survey", desc: "Field survey in Nairobi outskirts.", tag: "Surveying" },
            { title: "GIS Land Use Map", desc: "Spatial analysis output using QGIS.", tag: "GIS" },
            { title: "Construction Setting Out", desc: "Site engineering on a civil works project.", tag: "Civil Works" },
            { title: "Cadastral Mapping", desc: "Boundary demarcation documentation.", tag: "Surveying" },
            { title: "Remote Sensing Output", desc: "Satellite imagery classification.", tag: "GIS" },
            { title: "Site Fieldwork", desc: "Data collection during engineering survey.", tag: "Fieldwork" },
          ].map((item) => (
            <div key={item.title} style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "10px", overflow: "hidden" }}>
              {/* Image placeholder — replace src with your actual image later */}
              <div style={{ background: "#EAF3DE", height: "160px", display: "flex", alignItems: "center", justifyContent: "center", color: "#3B6D11", fontSize: "13px" }}>
                📷 Add image here
              </div>
              <div style={{ padding: "0.9rem" }}>
                <span style={{ background: "#EAF3DE", color: "#27500A", fontSize: "11px", padding: "3px 10px", borderRadius: "6px" }}>{item.tag}</span>
                <h3 style={{ fontSize: "14px", fontWeight: "600", marginTop: "0.6rem" }}>{item.title}</h3>
                <p style={{ fontSize: "12px", color: "#555", marginTop: "4px", lineHeight: "1.5" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Contact */}
      <section id="contact" style={{ padding: "3rem 2rem", background: "#118e15" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#100606f2" }}>Contact</p>
        <h2 style={{ fontSize: "1.6rem", fontWeight: "600", marginTop: "0.4rem" }}>Let's build something accurate.</h2>
        <p style={{ marginTop: "0.5rem", color: "#120f0f", fontSize: "15px" }}>Open to surveying, GIS and civil works collaborations across Kenya and beyond.</p>
        <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "10px", maxWidth: "360px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "#18b8e0", border: "1px solid #e5e5e5", borderRadius: "10px", padding: "0.9rem 1rem", fontSize: "13px", color: "#555" }}>📧 gichuhiannie80@gmail.com</div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "#18b8e0s", border: "1px solid #e5e5e5", borderRadius: "10px", padding: "0.9rem 1rem", fontSize: "13px", color: "#555" }}>📍 Nairobi, Kenya</div>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "1.5rem", fontSize: "13px", color: "#888" }}>
        © {new Date().getFullYear()} Ann Gichuhi · Geomatics Engineer
      </footer>

    </div>
  );
}

export default App;