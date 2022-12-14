import React from 'react';
import GitProfile from '@arifszn/gitprofile';
import '@arifszn/gitprofile/dist/style.css';

function App() {
  return (
    <GitProfile
      config={{
        github: {
          username: '00bn', // Your GitHub org/user name. (Required)
          sortBy: 'stars', // stars | updated
          limit: 10, // How many projects to display.
          exclude: {
            forks: true, // Forked projects will not be displayed if set to true.
            projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
          },
        },
        social: {
          linkedin: '',
          twitter: '',
          facebook: '',
          instagram: '',
          dribbble: '',
          behance: '',
          medium: '',
          dev: '',
          stackoverflow: '', // format: userid/username
          website: '',
          phone: '',
          email: 'badriahalnahdi@gmail.com',
        },
        resume: {
          fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
        },
        skills: [
          'C',
          'Python',
          'MySQL',
          'Git',
          'Docker',
          'Networks',
          'CCNA',
          'Linux',
          'Wireshark',
          'OWASP',
          'Burp Suite',
          'Immunity Debugger',
          'IDA',
          'Metasploit',
        ],
        experiences: [
          {
            company: 'Foloosi',
            position: 'Costumer Service Trainee',
            from: 'December 2019',
            to: 'June 2020',
            companyLink: 'https://www.foloosi.com/',
          },
          {
            company: 'Alef Education',
            position: 'IT Support Trainee',
            from: 'February 2019',
            to: 'April 2019',
          },
          {
            company: 'Masdar',
            position: 'Governance and Security Management Intern',
            from: 'Augest 2018',
            to: 'October 2018',
            companyLink: 'https://masdar.ae/',
          },
        ],
        education: [
          {
            institution: '42 Abu Dhabi',
            degree: 'Diploma in Software Development',
            from: '2021',
            to: 'Present',
          },
          {
            institution: 'Zayed University',
            degree: 'Bachelor of Information Systems in Security and Network Technologies',
            from: '2014',
            to: '2018',
          },
        ],
        googleAnalytics: {
          id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        },
        // Track visitor interaction and behavior. https://www.hotjar.com
        hotjar: {
          id: '',
          snippetVersion: 6,
        },
        themeConfig: {
          defaultTheme: 'business',

          // Hides the switch in the navbar
          // Useful if you want to support a single color mode
          disableSwitch: false,

          // Should use the prefers-color-scheme media-query,
          // using user system preferences, instead of the hardcoded defaultTheme
          respectPrefersColorScheme: false,

          // Hide the ring in Profile picture
          hideAvatarRing: false,

          // Available themes. To remove any theme, exclude from here.
          themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula',
            'cmyk',
            'autumn',
            'business',
            'acid',
            'lemonade',
            'night',
            'coffee',
            'winter',
            'procyon',
          ],

          // Custom theme
          customTheme: {
            primary: '#fc055b',
            secondary: '#219aaf',
            accent: '#e8d03a',
            neutral: '#2A2730',
            'base-100': '#E3E3ED',
            '--rounded-box': '3rem',
            '--rounded-btn': '3rem',
          },
        },
      }}
    />
  );
}

export default App;
