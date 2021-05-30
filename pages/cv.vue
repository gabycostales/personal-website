<template>
  <div class="cv-page">
    <h1 class="page-title">
      <span>< </span> experience <span> ></span>
    </h1>
    <section class="education">
      <div class="section-title">
        <font-awesome-icon 
          icon="graduation-cap"
          class="title-icon"
        /> 
        <h2 class="title">education</h2>
      </div>
      <div class="education-info">
        <h3 class="college">University of Miami</h3>
        <p>Bachelor's Degree, Computer Science</p>
        <p>Minors: Mathematics and Business Administration</p>
      </div>
    </section>
    <section>
      <div class="section-title">
        <font-awesome-icon 
          icon="mug-hot"
          class="title-icon"
        /> 
        <h2 class="title">work</h2>
      </div>
      <JobDescription
        v-for="(job, i) in jobs"
        :key="`job-${i}`"
        v-bind="job"
      />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          title: 'Software Developer II',
          company: 'ResMan Property Management',
          startDate: 'January 2020',
          endDate: 'Present',
          about: [
            'Building automation to convert pre-existing websites into fully functional responsive web apps',
            'Using MeteorJS, Vue.js and Node.js frameworks to add new features to both existing and new products',
            'Working with a team of developers in an Agile environment',
          ],
          skills: ['JavaScript', 'Mongo', 'Meteor.js', 'Vue.js', 'JIRA']
        },
        {
          title: 'Web Developer',
          company: 'Razz Interactive',
          startDate: 'June 2018',
          endDate: 'January 2020',
          about: [
            'Full-stack developer implementing both client and server-side logic for all projects including a new content management system to create and manage marketing websites.',
            'Code, test, and maintain corporate websites, web applications, and digital experiences with innovative custom designs.',
            'Translate design mockups into dynamic, optimized, cross-browser compatible, and responsive website templates or reusable components that conform to web accessibility standards and best practices.',
            'Analyze user needs and technical software requirements to determine feasibility of designs within time and cost constraints.',
            'Follow an agile development workflow and communicate with team members to ship solutions quickly and often.',
            'Build custom Wordpress websites/themes for clients with a Vue frontend.',
            'Write technical documentation.'
          ],
          skills: ['PHP', 'SQL', 'WordPress', 'JavaScript', 'Mongo', 'Meteor.js', 'Vue.js', 'Asana']
        },
        {
          title: 'Web Developer',
          company: 'University of Miami',
          startDate: 'March 2016',
          endDate: 'June 2018',
          about: [
            'Lead Full Stack Developer for a web application that allows firefighters to create timely reports documenting the varied exposures to hazardous environments and toxins they encounter on the job.',
            'Full responsibility over the development and delivery of the app’s features, from prototyping to testing to production.',
            'Collaborate with designers to make usability and user experience improvements that are based on user research.',
            'Create and maintain documentation and materials including UML artifacts and user workflows.',
            'Design a relational database that will also be used by researchers at the university.',
          ],
          skills: ['PHP', 'SQL', 'Laravel', 'MVC', 'Relation Database Design', 'jQuery', 'JavaScript'],
        },
        {
          title: 'Web Development Tutor',
          company: 'University of Miami',
          startDate: 'October 2015',
          endDate: 'December 2015',
          about: [
            'Taught front-end web development fundamentals, UI frameworks, and tools.',
            'Helped graduate students in the Interactive Media program troubleshoot/debug their web development projects',
          ],
        },
        {
          title: 'Teaching Assistant',
          company: 'Girls Who Code',
          startDate: 'June 2014',
          endDate: 'August 2014',
          about: [
            'Part of the inaugural Miami Summer Immersion Program.',
            'Educated and equipped high school women with skills and resources to pursue academics and careers in technology and engineering sectors.',
            'Taught a project-based curriculum on computing concepts, programming fundamentals, algorithms, robotics, and responsive web development.',
            'Managed and supported classroom lectures, discussions, and all other classroom activities, logistics, and administrative business.',
          ]
        },
        {
          title: 'Senior Service Desk Technician',
          company: 'University of Miami',
          startDate: 'September 2013',
          endDate: 'December 2015',
          about: [
            'Provided technical and audio-visual support for the school\'s classrooms, events, and faculty.',
            'Diagnosed, troubleshooted, and resolved hardware, software, and networking issues.',
            'Interacted with high profile faculty and staff to solve complex issues.',
            'Communicated effectively with users of both technical and non-technical backgrounds.',
            'Oversaw and delegated duties onto a team of 30 student technicians to ensure efficient and effective technical support.',
            'Developed and lead training sessions and demos for incoming technicians.',
          ],
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>

  .cv-page {
    @include page;
    @include contained-page;

    .page-title {
      text-align: center;
      font-size: 45px;
      letter-spacing: 2px;
      margin-bottom: 40px;

      span {
        color: var(--accent-color);
      }
    }

    section {
      margin-bottom: 40px;

      .section-title {
        display: flex;
        align-items: baseline;
        margin-bottom: 20px;
        
        .title {
          font-size: 32px;
          line-height: 1em;
          letter-spacing: 2px;
        }

        .title-icon {
          width: 30px;
          margin-right: 10px;
          color: var(--accent-color);
        }
      }
    }
  }

  .education-info {
    .college {
      font-size: 25px;
      letter-spacing: 2px;
      font-family: $spaceMonoFamily;
      color: var(--accent-color);
    }

    p {
      font-size: 16px;
      margin: 5px 0;
    }
  }

</style>