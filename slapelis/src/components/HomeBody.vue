<template>
  <div>
    <div class="about">
      <h2 class="title">a little about me</h2>
      <h5 class="info">
        I'm a developer with a passion for Python, web development, and learning new stuff. I enjoy
        building things that make peoples' lives easier...or that just look pretty (kind of --
        still working on this design thing). Really I just enjoy coding and could do this all day.
      </h5>
    </div>
    <div class="skills">
      <div class="left">
        <h2 class="title">things I've done</h2>
      </div>
      <div class="right">
        <h5 class="info">
          <ul>
            <li>
              Built automation to automatically increase storage array LUN capacity on the array
              and within the virtualization software.
            </li>
            <li>
              Developed a tool for engineers on my team to easily add VLANs to Cisco UCS
              pods.
            </li>
            <li>
              Created a smoke script to check several parameters for Isilon OneFS arrays across
              different firmware versions.
            </li>
            <li>
              Engineered a REST API and modeled a relational database to map out our environment
              from software packages on virtual machines up to the UCS pod that VM lives in and
              everything in-between.
            </li>
            <li>
              Wrote a Python library to allow for the manipulation of all of my company's storage
              arrays (several different models) through one unified set of commands.
            </li>
            <li>
              Converted
              <a
                target="_blank"
                href="https://github.com/IBM/pyxcli/pull/9"
              >IBM's XIV library</a> from Python 2 to Python 3 (and made it backwards compatible).
            </li>
            <li>
              Hacked together an
              <a
                target="_blank"
                href="https://github.com/wegotthekeys/SeniorProject"
              >Android application</a> to allow for peer-to-peer communication completely offline
              via Google's Nearby Connections API.
            </li>
          </ul>
        </h5>
      </div>
    </div>
    <div class="wants">
      <h2 class="title">what I want to do</h2>
      <h5 class="info">
        I want to work for
        <b>your company</b> building great products. Ideally I'd be a software engineer or a
        DevOps engineer, but titles don't really matter to me; I just want to code something cool
        and learn new things along the way.
      </h5>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about {
  display: flex;
  flex-direction: column;
  padding: 5vw;
  background-color: #3a405a;
  color: #fce38a;
}
.about .title {
  font-size: 4vw;
  font-weight: 700;
}
.about .info {
  font-size: 2vw;
}
.skills {
  font-size: 2vw;
  display: flex;
  align-content: center;
  align-items: center;
  background-color: #95e1d3;
}
.skills .title {
  font-size: 4vw;
  font-weight: 700;
}
.skills .left {
  padding: 5vw;
  min-width: 50%;
  color: white;
}
.skills .right {
  background-color: white;
  padding: 5vw;
}
.skills li {
  font-size: 1.2vw;
  padding-top: 1vw;
}
.skills a {
  color: #95e1d3;
}
.wants {
  background-color: #aec5eb;
  padding: 5vw;
}
.wants .title {
  font-size: 4vw;
  font-weight: 700;
}
.wants .info {
  font-size: 2vw;
}

@media only screen and (max-width: 1150px) {
  .about .title {
    font-size: 8vw;
  }
  .about .info {
    font-size: 5vw;
  }
  .skills {
    display: inline-block;
  }
  .skills .title {
    text-align: center;
    font-size: 8vw;
  }
  .skills ul li {
    font-size: 5vw;
  }
  .wants .title {
    font-size: 8vw;
  }
  .wants .info {
    font-size: 5vw;
  }
}
</style>
