class Skill {
  constructor (name, level = 1) {
    this.name = name;
    this.level = level;
  }

  focus = null;
}

class GrowingSkill extends Skill {
  focus = 'growing';
}

class FadingSkill extends Skill {
  focus = 'fading';
}

class SkillCategory {
  constructor (name, skills = []) {
    this.name = name;
    this.skills = skills;
  }
}

// Programming
class Javascript extends Skill { constructor () { super('JavaScript', 3); } }
class Perl extends FadingSkill { constructor () { super('Perl', 2); } }
class Java extends GrowingSkill { constructor () { super('Java', 1); } }
class VueJs extends Skill { constructor () { super('Vue.js', 3); } }
class CSS extends Skill { constructor () { super('CSS', 3); } }
class HTML extends Skill { constructor () { super('HTML', 3); } }
class NodeJs extends Skill { constructor () { super('Node.js', 3); } }
class Nuxt extends Skill { constructor () { super('Nuxt', 2); } }
class JQuery extends FadingSkill { constructor () { super('jQuery', 3); } }
class Backbone extends FadingSkill { constructor () { super('Backbone', 2); } }
class Llms extends GrowingSkill { constructor () { super('LLMs', 1); } }

// Infrastructure
class AWS extends Skill { constructor () { super('AWS', 3); } }
class GCP extends Skill { constructor () { super('Google Cloud', 1); } }
class Terraform extends Skill { constructor () { super('Terraform', 3); } }
class Terragrunt extends Skill { constructor () { super('Terragrunt', 2); } }
class Docker extends Skill { constructor () { super('Docker', 2); } }

// Architecture
class HTTP extends Skill { constructor () { super('HTTP', 3); } }
class RESTful extends Skill { constructor () { super('RESTful APIs', 3); } }
class Express extends Skill { constructor () { super('Express.js', 3); } }
class Microservices extends Skill { constructor () { super('Microservices', 1); } }
class ModularArchitecture extends Skill { constructor () { super('Modular Architecture', 3); } }
class EventDriven extends Skill { constructor () { super('Event-driven', 2); } }
class Serverless extends Skill { constructor () { super('Serverless', 2); } }
class MultiTenant extends Skill { constructor () { super('Multi-tenant Systems', 2); } }
class AutoScaling extends Skill { constructor () { super('Auto-scaling', 2); } }
class OAuth extends Skill { constructor () { super('OAuth', 2); } }

// DevOps
class Jenkins extends Skill { constructor () { super('Jenkins', 3); } }
class GitHubActions extends Skill { constructor () { super('GitHub Actions', 1); } }
class NewRelic extends Skill { constructor () { super('New Relic', 2); } }

// Databases
class MySQL extends Skill { constructor () { super('MySQL', 3); } }
class Redis extends Skill { constructor () { super('Redis', 3); } }

// Processes
class Agile extends Skill { constructor () { super('Agile', 2); } }
class Scrum extends FadingSkill { constructor () { super('Scrum', 2); } }
class Kanban extends GrowingSkill { constructor () { super('Kanban', 1); } }

// Domain Expertise
class ChanceToWin extends Skill { constructor () { super('Chance-to-Win', 3); } }
class Sweepstakes extends Skill { constructor () { super('Sweepstakes', 3); } }
class ConsumerEngagement extends Skill { constructor () { super('Consumer Engagement', 2); } }
class Loyalty extends Skill { constructor () { super('Loyalty Programs', 1); } }

// Leadership
class Mentorship extends Skill { constructor () { super('Mentorship', 1); } }
class ProcessOptimization extends Skill { constructor () { super('Process Optimization', 2); } }
class Strategy extends Skill { constructor () { super('Strategy', 2); } }
class EngineeringManagement extends GrowingSkill { constructor () { super('Engineering Management', 2); } }

// Fun
class Karaoke extends Skill { constructor () { super('Karaoke', 1); } }
class HomeAutomation extends Skill { constructor () { super('Home Automation', 2); } }

// Define skill categories
const Programming = new SkillCategory('Programming', [
  Javascript,
  Java,
  Perl,
  VueJs,
  CSS,
  HTML,
  NodeJs,
  Nuxt,
  JQuery,
  Backbone,
  Llms,
]);

const Infrastructure = new SkillCategory('Infrastructure', [
  AWS,
  GCP,
  Terraform,
  Terragrunt,
  Docker,
]);

const Architecture = new SkillCategory('Architecture', [
  HTTP,
  RESTful,
  Express,
  Microservices,
  ModularArchitecture,
  EventDriven,
  Serverless,
  MultiTenant,
  AutoScaling,
  OAuth,
]);

const DevOps = new SkillCategory('DevOps', [
  Jenkins,
  GitHubActions,
  NewRelic,
]);

const Databases = new SkillCategory('Databases', [
  MySQL,
  Redis,
]);

const Processes = new SkillCategory('Processes', [
  Agile,
  Scrum,
  Kanban,
]);

const Domain = new SkillCategory('Domain Expertise', [
  ChanceToWin,
  Sweepstakes,
  ConsumerEngagement,
  Loyalty,
]);

const Leadership = new SkillCategory('Leadership', [
  EngineeringManagement,
  ProcessOptimization,
  Strategy,
  Mentorship,
]);

const Fun = new SkillCategory('Fun', [
  Karaoke,
  HomeAutomation,
]);

export const useExperienceStore = () => {
  // All skill categories
  const skillCategories = [
    Programming,
    Infrastructure,
    Architecture,
    DevOps,
    Databases,
    Processes,
    Domain,
    Leadership,
    Fun,
  ];

  // Original topSkills array for backward compatibility
  const topSkills = [
    Javascript,
    Java,
    MySQL,
    Redis,
    AWS,
    Terraform,
    Jenkins,
    GitHubActions,
    Sweepstakes,
    Agile,
    Kanban,
    Scrum,
    Llms,
    Karaoke,
  ];

  const timeline = [
    {
      title: 'Director of Engineering',
      company: 'Merkle Promotions & Loyalty Solutions',
      period: 'November 2024 - Present',
      description: 'Leading engineering teams to deliver sustainable, adaptable solutions and fostering a culture of ownership and continuous improvement.',
      skills: [EngineeringManagement, Strategy, ProcessOptimization, Java, Javascript],
    },
    {
      title: 'Delivery Advocate',
      company: 'Merkle Promotions & Loyalty Solutions',
      period: 'September 2021 - November 2024',
      description: 'Platform architect and champion of software delivery experience with focus on cloud infrastructure and developer experience optimization.',
      skills: [Terraform, AWS, Jenkins, GitHubActions, Llms],
    },
    {
      title: 'Team Lead, Solutions Architect',
      company: 'Merkle Promotions & Loyalty Solutions',
      period: 'January 2020 - September 2021',
      description: 'Led technical solutions design and implementation after HelloWorld became Merkle Promotions & Loyalty Solutions.',
      skills: [MultiTenant, Sweepstakes, EngineeringManagement, ModularArchitecture],
    },
    {
      title: 'Team Lead, Solutions Architect',
      company: 'HelloWorld, Inc.',
      period: 'August 2019 - January 2020',
      description: 'Designed and implemented technical solutions while leading development teams for major loyalty and promotions programs.',
      skills: [ConsumerEngagement, EngineeringManagement, Sweepstakes],
    },
    {
      title: 'Team Lead, Senior Software Engineer',
      company: 'HelloWorld, Inc.',
      period: 'June 2017 - August 2019',
      description: 'Led development teams while contributing to software engineering efforts on high-scale consumer campaigns.',
      skills: [EngineeringManagement, Javascript, VueJs],
    },
    {
      title: 'Senior Software Engineer',
      company: 'HelloWorld, Inc.',
      period: 'February 2015 - June 2017',
      description: 'Developed high-performance web applications and services to support multi-million user engagement platforms.',
      skills: [Javascript, NodeJs, Redis, RESTful, MySQL, Express, NewRelic],
    },
    {
      title: 'Software Engineer',
      company: 'HelloWorld, Inc.',
      period: 'July 2012 - February 2015',
      description: 'Designed and built high-performance web applications, created RESTful APIs, optimized code for performance, and mentored new hires.',
      skills: [Perl, MySQL, Javascript, NodeJs, Redis, Express, Backbone],
    },
    {
      title: 'Associate Software Engineer',
      company: 'HelloWorld, Inc.',
      period: 'October 2010 - July 2012',
      description: 'Developed interactive web applications to enhance brands\' online presence and collaborated with teams to build promotions and web services.',
      skills: [Perl, MySQL, Javascript, HTML, CSS],
    },
    {
      title: 'Interface Development Intern',
      company: 'HelloWorld, Inc.',
      period: 'July 2010 - October 2010',
      description: 'Supported build teams with HTML, CSS, and JavaScript development, becoming known for proficiency in JavaScript application development.',
      skills: [HTML, CSS, Javascript, JQuery],
    },
  ];

  return {
    timeline,
    topSkills,
    skillCategories,
  };
};
