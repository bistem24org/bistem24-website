
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    /*
     * BISTEM24 BLOG SYSTEM
     *
     * Images folder: images/blog/
     * Blog listing: blog.html
     * Article URL: blog.html?post=blog-1
     *
     * Add future blogs inside the blogs array below.
     */

    const blogs = [
        {
            id: "blog-1",
            title: "More Tips for STEM in the Classroom",
            category: "STEM Education",
            author: "Rita Oladiran",
            date: "2023-12-27",
            dateLabel: "27 December 2023",

            // Upload the cover image using this exact filename.
            image: "images/blog/blog1f.png",
            imageAlt: "STEM classroom learning and scientific observation",

            summary:
                "Discover practical ways to spark scientific curiosity in students through observation, thoughtful questions, hypotheses and hands-on experiments.",

            content: `
                <p>Ever wonder how to spark that scientific curiosity in students? The answer is simple: start with an observation!</p>

                <p>Sharing some tips penned by my STEM colleague
                <a href="https://www.linkedin.com/in/ACoAAAOSO3YBguHU4BUHoKVt5cV49cDU2-B4VLs" target="_blank" rel="noopener noreferrer">Zachariah Mbasu</a>,
                Lead PhET Ambassador in Africa.</p>

                <p>The journey of scientific discovery begins with a keen eye and an inquisitive mind. And the best part? Students can begin exploring the world around them every day.</p>

                <figure>
                    <img class="article-inline-image"
                         src="images/blog/blog1ff.png"
                         alt="STEM education activity"
                         loading="lazy">
                    <figcaption>Encourage students to observe, explore and ask questions.</figcaption>
                </figure>

                <h2>Step 1: Encourage Observation</h2>

                <p>Encourage your students to actively observe the world around them. Whether it is the way a plant grows or the mechanics of a swinging pendulum, every observation is a starting point for exploration.</p>

                <h2>Step 2: Formulate Questions</h2>

                <p>A good observation often leads to a great question. Ask students what they are curious about, and guide them in phrasing their questions effectively.</p>

                <h2>Step 3: Develop a Hypothesis</h2>

                <p>Encourage students to come up with a testable hypothesis. This is a possible answer to a question that can be examined through experimentation.</p>

                <h2>Step 4: Experiment</h2>

                <p>This is where the fun really begins. Students can engage in hands-on experiments to test their hypotheses. Encourage them to take notes and gather data as they work.</p>

                <figure>
                    <img class="article-inline-image"
                         src="images/blog/blog1.png"
                         alt="Students participating in a practical science experiment"
                         loading="lazy">
                    <figcaption>Hands-on activities help learners connect ideas with evidence.</figcaption>
                </figure>

                <h2>Step 5: Analyse and Conclude</h2>

                <p>After the experiment, help students analyse their data. What did they learn? Was their hypothesis supported by the results? What could they investigate next?</p>

                <div class="article-callout">
                    <strong>Key takeaway:</strong>
                    Teaching science is not just about memorising facts. It is about developing curiosity, critical thinking and a methodical approach to discovery.
                </div>

                <p>Encourage your students to observe, ask questions and experiment. The scientific journey can begin with something as simple as noticing the world around them.</p>
            `
        },

        {
            id: "blog-2",
            title: "Pedagogy Tips for Using EdTech in the Classroom",
            category: "Education Technology",
            author: "BiSTEM24",
            date: "2023-12-27",
            dateLabel: "27 December 2023",

            image: "images/blog/blog2g.png",
            imageAlt: "Technology and digital tools in the classroom",

            summary:
                "Explore practical approaches to integrating technology into teaching, using interactive visuals and guided prompts to encourage active learning.",

            content: `
                <p>Starting out: pedagogy tips for technology use in the classroom.</p>

                <p>Today, there is much discussion about integrating technology into education and learning. In the classroom, technology can support teaching techniques, aid student retention, enhance engagement and improve the overall learning experience.</p>

                <p>The world of work and learning continues to change. Classrooms can respond by creating opportunities for students to explore, participate and express their understanding in different ways.</p>

                <p>Educational theorists have discussed how learners who grow up surrounded by digital technology may respond differently to traditional, lecture-centred approaches. This highlights the importance of designing learning experiences that invite students to participate actively.</p>

                <h2>1. Use Visuals in Your Lessons</h2>

                <p>Where possible, employ interactive visuals in lesson and activity design. The <a href="https://phet.colorado.edu/" target="_blank" rel="noopener noreferrer">PhET Interactive Simulations from the University of Colorado Boulder</a> offer resources that can help students explore scientific and mathematical concepts.</p>

                <p>Visuals can help learners think, reflect and build mental models. Interactive activities allow students to manipulate variables, observe changes and investigate how different elements relate to one another.</p>

                <figure>
                    <img class="article-inline-image"
                         src="images/blog/blog2gg.png"
                         alt="Interactive technology supporting classroom learning"
                         loading="lazy">
                    <figcaption>Interactive resources can help students explore concepts at their own pace.</figcaption>
                </figure>

                <h2>2. Combine Visuals with Guided Prompts</h2>

                <p>Instead of asking students only to memorise a definition, use prompts that encourage them to explore, describe and explain what they observe.</p>

                <p>For example, when teaching fractions, invite students to manipulate the parts of a visual model. Ask them to describe what changes, identify patterns and explain the relationship between the parts.</p>

                <h2>3. Encourage Active Participation</h2>

                <p>Technology is most useful when it supports a clear learning objective. Give students opportunities to investigate, discuss their observations, test ideas and explain their conclusions.</p>

                <h2>4. Make Technology Serve Learning</h2>

                <p>Choose digital tools based on what students need to learn, rather than using technology simply because it is available. Pair digital activities with clear instructions, meaningful questions and time for reflection.</p>

                <div class="article-callout">
                    <strong>Key takeaway:</strong>
                    Effective educational technology is not just about the device or software. It is about designing learning experiences that encourage curiosity, participation and deeper understanding.
                </div>

                <p><em>Editorial note: Explore practical strategies, teaching approaches, and real-world examples that help educators integrate technology into meaningful classroom learning.</em></p>
            `
        },

        {
            id: "blog-3",
            title: "A Conceptual Look at the Future of Learning – Design Perspective",
            category: "Learning Innovation",
            author: "BiSTEM24",
            date: "15-10-22",
            dateLabel: "15 December 2022",

            image: "images/blog/blog3h.png",
            imageAlt: "Conceptual design for future learning experiences",

            summary:
                "An exploration of embodied learning, haptic technology and tangible interfaces, using a conceptual example involving physics and vehicle safety.",

            content: `
                <p>This article explores a conceptual perspective on the future of classroom and informal learning, with a focus on embodied learning, haptics and tangible interfaces.</p>

                <figure>
                    <img class="article-inline-image"
                         src="images/blog/blog3hh.png"
                         alt="Visual representing the future of learning and technology"
                         loading="lazy">
                    <figcaption>Fig a, shows an example of embodied learning with XR technology. Fig b, showing the vehicle haptic points</figcaption>
                </figure>

                <h2>Embodied Learning and Interaction</h2>

                <p>The original article describes a learning activity design in which the concepts of force and momentum in physics are modelled to demonstrate their relevance to vehicle safety features, including airbags and seatbelts.</p>

                <h2>Exploring Haptic Technology</h2>

                <p>The concept uses haptic technology to provide tactile and movement-based feedback. The proposed experience combines physical interaction with digital tools to help learners investigate how forces and motion work.</p>

               <figure>
                <video class="article-inline-image"
                controls
                 preload="metadata"
                 playsinline
                 style="width: 100%; height: auto; border-radius: 8px;">
                  <source src="images/blog/blog3hhh.mp4" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              <figcaption>
              Explore embodied learning, haptic technology and interactive interfaces.
          </figcaption>
        </figure>

                <h2>Connecting Physical and Digital Experiences</h2>

                <p>The design described in the source combines physical interfaces with virtual reality and a computer display. Its purpose is to demonstrate how interactive, multisensory experiences can support the exploration of complex ideas.</p>

                <div class="article-callout">
                    <strong>About this article:</strong>
                    Explore practical insights, educational strategies, and innovative approaches to STEM learning. This article highlights how engaging activities and thoughtful teaching methods can help students develop curiosity, critical thinking, and problem-solving skills.
                </div>
            `
        },

        {
            id: "blog-4",
            title: "Developing Spatial Skills: How the Curriculum Helps",
            category: "STEM Education",
            author: "BiSTEM24",
            date: "2022-08-09",
            dateLabel: "9 August 2022",

            image: "images/blog/blog4j.png",
            imageAlt: "Students developing spatial skills through practical STEM activities",

            summary:
                "An introduction to the role of curriculum and practical learning activities in helping students develop spatial thinking and explore STEM concepts.",

            content: `
                <p>Spatial skills help learners understand shapes, positions, structures and how objects relate to one another. These abilities can be explored through practical activities and learning experiences.</p>

                <figure>
                    <img class="article-inline-image"
                         src="images/blog/blog4jj.png"
                         alt="Students working together on a practical STEM activity"
                         loading="lazy">
                    <figcaption>​Fig. 1- A model of the Spatial curriculum instructional cycle.</figcaption>
                </figure>

                <h2>Learning Through Practical Activities</h2>

                <p>Activities involving building, drawing, assembling objects and exploring diagrams can give students opportunities to investigate spatial relationships and explain their thinking.</p>

                <h2>Connecting Curriculum and Exploration</h2>

                <figure>
                    <img class="article-inline-image"
                         src="images/blog/blog4jjj.png"
                         alt="Students working together on a practical STEM activity"
                         loading="lazy">
                    <figcaption>fig 2- showing images of some PhET HTML sims with graphics and spatial characteristics. 
                    using simulations and other multi modal interactive representations, aids students' metacognition, i.e, 
                    their ability to reflect and mentally visualize a phenomenon beyond what is taught.
                    Simulations aid spatial visualization.</figcaption>
                </figure>

                <p>A well-designed learning activity can help students move from observing a structure to describing its parts and considering how those parts fit together. Teachers can use questions and demonstrations to guide this process.</p>

                <h2>Making STEM Learning Meaningful</h2>

                <p>Practical tasks can connect classroom concepts with situations that learners recognise. Students can share their approaches, compare solutions and reflect on what they discover.</p>

                <div class="article-callout">
                    <strong>References:</strong>
                    Bransford, J. & ProQuest, 2000. How people learn brain, mind, experience, and school Expanded., Washington, D.C.: National Academy Press. 

Lindgren, R. & Schwartz, D. (2009) 'Spatial Learning and Computer Simulations in Science', International Journal of Science Education, 31:3, 419-438.

Perkins, K., Adams, W., Dubson, M., Finkelstein, N., Reid, S., Wieman, C., & LeMaster, R. 2006. PhET: Interactive simulations for teaching and learning physics. The physics teacher 44 (1). pp 18-23
​
Ramey, K. E., & Uttal, D. H. (2017) Making Sense of Space: Distributed Spatial Sensemaking in a Middle School Summer Engineering Camp, Journal of the Learning Sciences, 26:2, 277-319. 

Sweller,  J. (2005). Implications of cognitive load theory for multimedia learning. The Cambridge handbook of multimedia learning. 3(2). pp.19-30.
                </div>
            `
        }
    ];

    const listing = document.getElementById("blog-listing");
    const grid = document.getElementById("blog-grid");
    const articleSection = document.getElementById("article-section");

    if (!listing || !grid || !articleSection) {
        return;
    }

    const heroTitle = document.getElementById("hero-title");
    const heroDescription = document.getElementById("hero-description");

    const articleCategory = document.getElementById("article-category");
    const articleTitle = document.getElementById("article-title");
    const articleSummary = document.getElementById("article-summary");
    const articleAuthor = document.getElementById("article-author");
    const articleDate = document.getElementById("article-date");
    const articleCover = document.getElementById("article-cover");
    const articleContent = document.getElementById("article-content");

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, function (character) {
            const entities = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            };
            return entities[character];
        });
    }

    function createBlogCard(blog) {
        return `
            <article class="blog-card">
                <a class="blog-card-link"
                   href="blog.html?post=${encodeURIComponent(blog.id)}"
                   aria-label="Read ${escapeHTML(blog.title)}">

                    <div class="blog-card-image-wrap">
                        <img
                            class="blog-card-image"
                            src="${escapeHTML(blog.image)}"
                            alt="${escapeHTML(blog.imageAlt)}"
                            loading="lazy">
                    </div>

                    <div class="blog-card-body">
                        <span class="blog-category">
                            ${escapeHTML(blog.category)}
                        </span>

                        <h2>${escapeHTML(blog.title)}</h2>

                        <p class="blog-card-summary">
                            ${escapeHTML(blog.summary)}
                        </p>

                        <span class="read-article">
                            Read Article <span aria-hidden="true">→</span>
                        </span>
                    </div>
                </a>
            </article>
        `;
    }

    function renderListing() {
        listing.hidden = false;
        articleSection.hidden = true;

        heroTitle.textContent = "Blogs & Insights";
        heroDescription.textContent =
            "Ideas, stories and insights that inspire learning, innovation and opportunities in STEM.";

        grid.innerHTML = blogs.map(createBlogCard).join("");
        document.title = "Blogs & Insights | BiSTEM24";
    }

    function renderArticle(blog) {
        listing.hidden = true;
        articleSection.hidden = false;

        heroTitle.textContent = "Blog Article";
        heroDescription.textContent =
            "Insights and ideas from BiSTEM24.";

        articleCategory.textContent = blog.category;
        articleTitle.textContent = blog.title;
        articleSummary.textContent = blog.summary;
        articleAuthor.textContent = "By " + blog.author;

        articleDate.textContent = blog.dateLabel || "";
        articleDate.dateTime = blog.date || "";

        articleCover.src = blog.image;
        articleCover.alt = blog.imageAlt;
        articleContent.innerHTML = blog.content;

        document.title = blog.title + " | BiSTEM24";

        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }

    function renderPage() {
        const parameters = new URLSearchParams(window.location.search);
        const postId = parameters.get("post");

        if (!postId) {
            renderListing();
            return;
        }

        const selectedBlog = blogs.find(function (blog) {
            return blog.id === postId;
        });

        if (!selectedBlog) {
            renderListing();
            return;
        }

        renderArticle(selectedBlog);
    }

    renderPage();
});
