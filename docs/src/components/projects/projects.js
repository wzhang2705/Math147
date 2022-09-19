import './projects.css';

function Projects() {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className="projects">
        <div id="research" className="divider"></div>
        <h1>research experience 🧐</h1>
        <div className="section1" onClick={() => openInNewTab('https://github.com/xyfke/neo4j-apoc-CFG-SE')}>
            <h2>Undergraduate Research Assistant</h2>
            <h3>University of Waterloo | Sept 2022 - Present</h3>
            <ul>
              <li>Currently working alongside Prof. Jo Atlee and masters student FaFa Ke to develop code queries in Neo4J graph database</li>
              <li>Optimizing code queries for General Motors software database</li>
            </ul>
        </div>
        <div className="section1" onClick={() => openInNewTab('https://github.com/wzhang2705/scisim')}>
            <h2>Undergraduate Research Assistant</h2>
            <h3>University of Waterloo | Apr 2022 - Aug 2022</h3>
            <ul>
              <li>Worked alongside Prof. Justin Wan, built the penalty method linear solver for large-scale object-collision model in C++ in the field of Scientific Computing</li>
              <li>Improved linear solver runtime efficiency by 3x in models of over 16000+ objects</li>
              <li>Evaluated the performance and accuracy of 3 major linear solvers in the model to integrate the use of multiple solvers in object collision graphics</li>
            </ul>
        </div>

        <div id="work" className="divider"></div>
        <h1>software work experience ‍💻</h1>
        <div className="section">
          <h2>Software Engineer Intern</h2>
          <h3>Autonomic | Jan 2022 - Apr 2022</h3>
          <ul>
            <li>Initiated the new provisioning system on the Transportation Mobility Cloud (TMC), connecting 9M+ vehicles to data processing and cloud technology capabilities</li>
            <li>Accelerated the process of migrating internal backend cloud services from AWS to GCP while ensuring >99% service uptime and robustness</li>
            <li>Streamlined code workflow to link Pivotal Tracker stories with code updates using Github Actions</li>
            <li>Spearheaded new provisioning audit system to accelerate system review & maintenance</li>
          </ul>
        </div>

        <div className="section">
          <h2>Full Stack Developer Intern</h2>
          <h3>SS&C Technologies | Jan 2021 - May 2021</h3>
          <ul>
            <li>Engineered the REST API framework in Java Spring Boot on the SS&C Lyric platform to enable global recordkeeping capabilities in everyday business operations</li>
            <li>Designed robust database logic and schema to increase querying efficiency and data management</li>
            <li>Modernized SS&C Lyric web application frontend using Angular & TailwindCSS seamless experience for financial advisors and brokers to view transactions and aggregated data on the platform</li>
          </ul>
        </div>

        <div className="section">
          <h2>Full Stack Developer Intern</h2>
          <h3>SS&C Technologies | May 2020 - Aug 2020</h3>
          <ul>
            <li>Developed new automation testing framework in Protractor to increase development efficiency of internal knowledge base application</li>
            <li>Refined graphing and data visualization capabilities using D3.js</li>
          </ul>
        </div>

        <div id="teaching" className="divider"></div>
        <h1>teaching experience 📚</h1>
        <div className="section">
          <h2>BU111 Instructional Assistant</h2>
          <h3>Lazaridis School of Business & Economics at Wilfrid Laurier University | Sept 2021 - Dec 2021</h3>
          <ul>
            <li>Planned and taught BU111 weekly course labs of around 60+ first-year business students at WLU</li>
            <li>Assessed course assignments and exams</li>
            <li>Guided students during office hours with questions on course material and mentoring on personal experiences during the transition to university</li>
          </ul>
        </div>

        <div className="section">
          <h2>Private Tutor</h2>
          <h3>Freelance Work | Jul 2021 - Aug 2021</h3>
          <ul>
            <li>Led private 1-1 tutoring sessions in Python for high school computer science</li>
            <li>Accelerated learning by providing guidance on resources, tips, and strategies to learn to code from scratch</li>
          </ul>
        </div>

        <div className="section">
          <h2>Math Undergraduate Marker</h2>
          <h3>University of Waterloo | Sept 2020 - Dec 2020</h3>
          <ul>
            <li>Assessed assignments and exams for first-year advanced calculus course, MATH147</li>
          </ul>
        </div>

        <div className="section">
          <h2>Math Assistant Teacher</h2>
          <h3>Spirit of Math Schools Inc. | Sept 2016 - Jun 2019</h3>
          <ul>
            <li>Guided and taught high-performing students of grades 1 - 12 in after-school mathematics classes</li>
            <li>Provided specific assistance for math homework during drop-in tutoring sessions to ensure student success in learning and fostering a passion for mathematics</li>
          </ul>
        </div>

    </div>
  );
}

export default Projects;