import React from 'react';
import ReactDOM from 'react-dom';

import {
  Box,
  Deck,
  FlexBox,
  FullScreen,
  Heading,
  Image,
  ListItem,
  Slide,
  Text,
  UnorderedList,
} from 'spectacle';

const theme = {
  colors: {
    primary: 'white', // regular text
    secondary: '#c98d0c', // headings
    tertiary: '#283759', // background
    quaternary: 'yellow',
  },

  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};

const template = ({ slideNumber, numberOfSlides }) => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      {slideNumber + 1} / {numberOfSlides}
    </Box>
  </FlexBox>
);

const topHeadingStyle = { '-webkit-text-stroke': '3px black', 'margin-top': '20px', 'margin-bottom': 'auto'};
const bottomHeadingStyle = { '-webkit-text-stroke': '3px black', 'margin-bottom': '20px'};

const Presentation = () => (
  <Deck theme={theme} template={template} transitionEffect="fade">
    <Slide id="title">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" fontSize="110px">Technical Interviews</Heading>
        <Text margin="0px" padding="0px">Mihail Mikov, Beer.js /June '21/</Text>
      </FlexBox>
    </Slide>
    <Slide id="with-vs-without-a-job"
      backgroundImage="url('./images/with-and-without-a-job.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}>Searching for a new job</Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>the only reason for a developer to shave</Heading>
      </FlexBox>
    </Slide>
    <Slide id="about-me">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">About me</Heading>
        <Image src="./images/misho-mikov.jpg" />
        <Text margin="0px" padding="0px">Engineering Manager @ SumUp</Text>
        <Text margin="0px" padding="0px">Sci-Fi Fan, Board Game Geek, Juggler</Text>
      </FlexBox>
    </Slide>
    
    <Slide id="talk-not-about">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">This talk is <b><u>NOT</u></b> about</Heading>
        <UnorderedList>
          <ListItem>How to search for jobs</ListItem>
          <ListItem>How to attract candidates</ListItem>
          <ListItem>How to do salary negotiation</ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide id="interview-process">
    <FlexBox height="100%" flexDirection="column">
      <Heading margin="0px" padding="0px">Interview process</Heading>
      <div className="arrow-container">
        <ul className="box">
          <li className="box-item">Engagement<div className="clarifications">Interest and organizational fit?</div></li>
          <li className="box-item"><b>Screening</b><div className="clarifications">Should we interview?<br/>Mostly automated</div></li>
          <li className="box-item"><b>Face-to-face</b><div className="clarifications">Should we make an offer?<br/>Mostly manual</div></li>
          <li className="box-item">Offer<div className="clarifications">Compensation and benefits</div></li>
        </ul>
      </div>
      </FlexBox>
    </Slide>
    <Slide id="no-one-right-process">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">There is no one correct interview process</Heading>
        <Text margin="0px" padding="0px">Things depend on many factors:</Text>
        <UnorderedList>
          <ListItem>Company size</ListItem>
          <ListItem>Team maturity</ListItem>
          <ListItem>Time to market</ListItem>
          <ListItem>Culture</ListItem>
        </UnorderedList>     
      </FlexBox>
    </Slide>
    <Slide id="types-of-interviews">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">Types of interviews</Heading>
        <UnorderedList>
          <ListItem>System Design</ListItem>
          <ListItem>Depth of expertise</ListItem>
          <ListItem>Coding</ListItem>
          <ListItem>Bar Raiser</ListItem>
          <ListItem>Wash up*</ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide id="ways-to-conduct-an-interview">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">Ways to conduct an interview</Heading>
        <UnorderedList>
          <ListItem>Questionnaire / Test</ListItem>
          <ListItem>Whiteboard</ListItem>
          <ListItem>Pair coding</ListItem>
          <ListItem>Homework assignment</ListItem>
        </UnorderedList>     
      </FlexBox>
    </Slide>
    
    <Slide id="interviews-are-about-evidence">
      <FlexBox height="100%" flexDirection="column">
        <Heading>Interviews are mainly about one thing...</Heading>
      </FlexBox>
    </Slide>
    <Slide id="sherlock"
      backgroundImage="url('./images/sherlock.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}></Heading>
        <Heading margin="0px" padding="0px" color="primary" style={{...bottomHeadingStyle, 'font-size': '100px'}}>Evidence</Heading>
      </FlexBox>
    </Slide>
    <Slide id="signals-from-interviews">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">Evidence</Heading>
        <Text margin="0px" padding="0px">about the skills and abilities of the candidate</Text>
        <FlexBox flexDirection="row">
        <UnorderedList>
          <ListItem>Technical knowledge</ListItem>
          <ListItem>Problem analysis</ListItem>
          <ListItem>Awareness of complexity</ListItem>
          <ListItem>Completeness of solution</ListItem>
        </UnorderedList>
        <UnorderedList>
          <ListItem>Prioritization</ListItem>
          <ListItem>Collaboration skills</ListItem>
          <ListItem>Values & Culture </ListItem>
        </UnorderedList>
        </FlexBox>
      </FlexBox>
    </Slide>
    <Slide id="what-is-evidence"
      backgroundImage="url('./images/evidence.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}></Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>What is evidence?</Heading>
      </FlexBox>
    </Slide>
    <Slide id="what-is-bad-evidence">
    <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">Examples of bad evidence</Heading>
        <UnorderedList>
          <ListItem>I <u>like</u> how the candidate thinks</ListItem>
          <ListItem>The candidate has a <u>good</u> understanding of the subject</ListItem>
          <ListItem>The candidate solved the problem <u>well</u></ListItem>
          <ListItem>The candidate <u>obviously</u> knew what we were talking about</ListItem>
        </UnorderedList>
        <Text><i>*The underlined qualifiers do not carry actual information</i></Text>
      </FlexBox>
    </Slide>
    <Slide id="what-is-good-evidence">
    <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">Examples of good evidence</Heading>
        <UnorderedList>
          <ListItem>The candidate broke the problem down into the <u>X, Y and Z</u> sub-problems</ListItem>
          <ListItem>The candidate described how to use technology <u>M</u> to address sub-problem <u>Z</u></ListItem>
          <ListItem>The candidate proactively identified <u>A, B and C</u> as additional concerns</ListItem>
          <ListItem>The candidate was able to clearly explain how <u>M</u> works</ListItem>
        </UnorderedList>
        <Text><i>*The underlined qualifiers are concrete and unbiased</i></Text>
      </FlexBox>
    </Slide>
    
    <Slide id="interviewer-detectives"
      backgroundImage="url('./images/csi.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}>Good interviewers are like detectives</Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>they are looking for evidence</Heading>
      </FlexBox>
    </Slide>
    <Slide id="interviewee-criminals"
      backgroundImage="url('./images/sloppy-criminals-raw.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}>Good candidate are like sloppy criminal</Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>they leave a lot of evidence behind</Heading>
      </FlexBox>
    </Slide>
    <Slide id="interviewer-not-a-judge"
      backgroundImage="url('./images/judge.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}>As an interviewer you are <b>NOT</b> a judge</Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>you are just collecting evidence</Heading>
      </FlexBox>
    </Slide>
    <Slide id="interviewer-enabler"
      backgroundImage="url('./images/helping-hand.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}>As an interviewer you are responsible</Heading>
        <Heading margin="0px" padding="0px" color="primary" style={{...bottomHeadingStyle, 'font-size': '68px' }}>for enabling the candidate to present their best</Heading>
      </FlexBox>
    </Slide>
    <Slide id="interviews-go-both-ways"
      backgroundImage="url('./images/i-know-more-than-you.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}>Candidates are also collecting evidence</Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>A bad impression can reflect negatively on the company's image</Heading>
      </FlexBox>
    </Slide>int
    <Slide id="every-interview-is-culture"
      backgroundImage="url('./images/trump-v-queen.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}>Every interview</Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>is a two-way culture interview</Heading>
      </FlexBox>
    </Slide>
    
    <Slide id="bad-interview-practices">
    <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">Some bad<span style={{color:"white"}}>*</span> interview practices</Heading>
        <Text margin="0px" padding="0px"><i>(which might be useful but could do more harm than good)</i></Text>
      </FlexBox>
    </Slide>    
    
    <Slide id="password-interview"
      backgroundImage="url('./images/pressure.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}></Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>The password interview</Heading>
      </FlexBox>
    </Slide>
    <Slide id="password-interview-explained">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">Password interview</Heading>
        <Text margin="0px" padding="0px">The interviewer expects the candidate to mention specific key words / technologies</Text>
        <UnorderedList>
          <ListItem>Close-ended questions</ListItem>
          <ListItem>Strong preliminary bias</ListItem>
          <ListItem>Harder to follow up with a discussion</ListItem>
        </UnorderedList>
        <Text margin="0px" padding="0px"><i>*Can work as long as it's used a basis for further discussion</i></Text>
      </FlexBox>
    </Slide>
    
    <Slide id="magic-trick-interview"
      backgroundImage="url('./images/magic.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}></Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>The magic trick interview</Heading>
      </FlexBox>
    </Slide>
    <Slide id="magic-trick-interview-explained">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">Magic trick interview</Heading>
        <Text margin="0px" padding="0px">The candidate is expected to produce an optimal solution to a contrived problem</Text>
        <UnorderedList>
          <ListItem>Candidates can memorize solutions to common problems</ListItem>
          <ListItem>Little or no relavance to actual work expectations</ListItem>
          <ListItem>Can shift the focus of the interview towards irrelevant topics</ListItem>
        </UnorderedList>
        <Text margin="0px" padding="0px"><i>*Can work as long as it's used a basis for further discussion</i></Text>
      </FlexBox>
    </Slide>
    
    <Slide id="paper-coding-interview"
      backgroundImage="url('./images/paper-coding-plain.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}></Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>The paper coding interview</Heading>
      </FlexBox>
    </Slide>
    <Slide id="paper-coding-interview-explained">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">Paper coding interview</Heading>
        <Text margin="0px" padding="0px">The candidate is expected to write "compilable" code without a computer</Text>
        <UnorderedList>
          <ListItem>Very stressful for the candidate</ListItem>
          <ListItem>Candidate is expected to have memorized the documentation</ListItem>
          <ListItem>Little or no relavance to actual work expectations</ListItem>
        </UnorderedList>
        <Text margin="0px" padding="0px"><i>*Can work with meta-code, or basic language features</i></Text>
      </FlexBox>
    </Slide>
    
    <Slide id="free-work-interview"
      backgroundImage="url('./images/comfy-at-home.webp')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}></Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>The unpaid intership interview</Heading>
      </FlexBox>
    </Slide>
    <Slide id="free-work-interview-explained">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">Unpaid intership interview</Heading>
        <Text margin="0px" padding="0px">The candidate is expected to commit an <u>unreasonable</u> amount of time and effort</Text>
        <UnorderedList>
          <ListItem>Very high opportunity cost for candidates</ListItem>
          <ListItem>Can imply a culture of expected overtime and bad work/life balance</ListItem>
        </UnorderedList>
        <Text margin="0px" padding="0px"><i>*Useful, but should be time boxed or compensated</i></Text>
      </FlexBox>
    </Slide>
    
    <Slide id="rockstar-interview"
      backgroundImage="url('./images/rockstars.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}></Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>The rockstar interview</Heading>
      </FlexBox>
    </Slide>
    <Slide id="rockstar-interview-explained">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">Rockstar interview</Heading>
        <Text margin="0px" padding="0px">The candidate is judged against an unreasonably high bar</Text>
        <UnorderedList>
          <ListItem>Especially hard for entry level positions</ListItem>
          <ListItem>No value in reminding candidates they are not Doug Crockford</ListItem>
          <ListItem>Candidate CVs can create overinflated expectations</ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
    <Slide id="experience"
      backgroundImage="url('./images/OfficeSpace.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}>We expect 10 year of experience</Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>with a 1 year old technology</Heading>
      </FlexBox>
    </Slide>
    
    <Slide id="inconclusive-interview"
      backgroundImage="url('./images/inconclusive.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}></Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>The inconclusive interview</Heading>
      </FlexBox>
    </Slide>
    <Slide id="inconclusive-interview-explained">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">Inconclusive interview</Heading>
        <Text margin="0px" padding="0px">The interviewer has not collected useful evidence during the interview session</Text>
        <UnorderedList>
          <ListItem>The interviewer does not know what type of evidence they need to collect</ListItem>
          <ListItem>The interviewer has no data points to contribute during the wash up</ListItem>
          <ListItem>The interviewer has wasted the candidates and the company's time and effort</ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
    
    <Slide id="screening"
      backgroundImage="url('./images/screening.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}></Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>Screening</Heading>
      </FlexBox>
    </Slide>

    <Slide id="front-loading"
      backgroundImage="url('./images/front-loading.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}></Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>Front-loading interviews</Heading>
      </FlexBox>
    </Slide>
    <Slide id="screening-explained">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">Screening / Front-loading interviews</Heading>
        <Text margin="0px" padding="0px">Automated as much as possible</Text>
        <UnorderedList>
          <ListItem>Dealing with a large number of candidates</ListItem>
          <ListItem>Interviewer's time is precious</ListItem>
          <ListItem>Start with the interview that might reject the largerst number of candidates*</ListItem>
        </UnorderedList>
        <Text margin="0px" padding="0px"><i>*while being careful about false negatives</i></Text>
      </FlexBox>
    </Slide>
    
    <Slide id="automated-test"
      backgroundImage="url('./images/exam.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}></Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>Automated testing</Heading>
      </FlexBox>
    </Slide>
    <Slide id="automated-test-explained">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">Automated testing</Heading>
        <Text margin="0px" padding="0px">Many providers are available online</Text>
        <UnorderedList>
          <ListItem>First "line of defense"</ListItem>
          <ListItem>Filters out only the weakest candidates</ListItem>
          <ListItem>Does not provide any evidence for suitability</ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide id="homework"
      backgroundImage="url('./images/take-home.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}></Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>Homework assignment</Heading>
      </FlexBox>
    </Slide>
    <Slide id="homework-explained">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">Homework assignment</Heading>
        <Text margin="0px" padding="0px">a small but interesting full-stack task</Text>
        <UnorderedList>
          <ListItem>Should not be fully automated - run tests, but also read the code</ListItem>
          <ListItem>Early insight into candidate's craft</ListItem>
          <ListItem>Possibility to show initiative and creativity</ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide id="system-design"
      backgroundImage="url('./images/system-design.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}></Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>The system design interview</Heading>
      </FlexBox>
    </Slide>
    <Slide id="system-design-explained">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">System design</Heading>
        <Text margin="0px" padding="0px">Example: "How would you build and deploy a social media site?"</Text>
        <UnorderedList>
          <ListItem>Problem analysis and requirements gathering</ListItem>
          <ListItem>Practical technical knowledge</ListItem>
          <ListItem>Project managment and prioritization</ListItem>
          <ListItem>Completeness of solution - metrics, error handling, etc</ListItem>
        </UnorderedList>
        <Text margin="0px" padding="0px"><i>*only confirms the candidate knows how to build a system, not that they can actually do it</i></Text>
      </FlexBox>
    </Slide>
    <Slide id="whiteboard"
      backgroundImage="url('./images/gilfoile.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}></Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>A picture can be worth a thousand words</Heading>
      </FlexBox>
    </Slide>
    
    <Slide id="depth-of-expertise"
      backgroundImage="url('./images/the-mind.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}></Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>The depth of expertise interview</Heading>
      </FlexBox>
    </Slide>
    <Slide id="depth-of-expertise-explained">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">Depth of expertise</Heading>
        <Text margin="0px" padding="0px">Discover the limits of the candidates knowledge and experience</Text>
        <UnorderedList>
          <ListItem>Discuss previous projects</ListItem>
          <ListItem>Attitude, leadership and impact</ListItem>
          <ListItem>Encourage candidate's self-evaluation</ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide id="bar-raiser"
      backgroundImage="url('./images/bar-raiser.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}></Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>The bar raiser interview</Heading>
      </FlexBox>
    </Slide>
    <Slide id="bar-raiser-explained">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">Bar raiser</Heading>
        <Text margin="0px" padding="0px">A candidate should be better than 50% of current employees</Text>
        <UnorderedList>
          <ListItem>Performed by a senior interviewer with a broad view of the organization</ListItem>
          <ListItem>Somewhat fuzzy prescription</ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide id="wash-up"
      backgroundImage="url('./images/wash-up.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}></Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>The post-interview wash up</Heading>
      </FlexBox>
    </Slide>
    <Slide id="wash-up-explained">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">Post-interview wash up</Heading>
        <Text margin="0px" padding="0px">Aggregating evidence from different interviews</Text>
        <UnorderedList>
          <ListItem>Raise concerns and red flags</ListItem>
          <ListItem>Reach a colletive decision with bar raiser as moderator</ListItem>
          <ListItem>Discuss possible offer and onboarding terms</ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
    
    <Slide id="advice-for-candidates"
      backgroundImage="url('./images/david-vs-goliath.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}></Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>Advice for candidates</Heading>
      </FlexBox>
    </Slide>
    <Slide id="advice-for-candidates-explained">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px">Advice for candidates</Heading>
        <Text margin="0px" padding="0px"></Text>
        <UnorderedList>
          <ListItem>Ask clarifying questions</ListItem>
          <ListItem>Explain your thought process</ListItem>
          <ListItem>Demonstate contextual knowledge</ListItem>
          <ListItem>Allow yourself to politely disagree</ListItem>
          <ListItem>Don't hide your personality</ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>

    <Slide id="interviewer-detectives-repeat"
      backgroundImage="url('./images/csi.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}>Good interviewers are like detectives</Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>they are looking for evidence</Heading>
      </FlexBox>
    </Slide>
    <Slide id="interviewee-criminals-repeat"
      backgroundImage="url('./images/sloppy-criminals-raw.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}>Good candidate are like sloppy criminal</Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>they leave a lot of evidence behind</Heading>
      </FlexBox>
    </Slide>
    <Slide id="interviewer-not-a-judge-repeat"
      backgroundImage="url('./images/judge.jpg')"
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" color="primary" style={topHeadingStyle}>As an interviewer you are <b>NOT</b> a judge</Heading>
        <Heading margin="0px" padding="0px" color="primary" style={bottomHeadingStyle}>you are just collecting evidence</Heading>
      </FlexBox>
    </Slide>
    
    <Slide id="outro">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" padding="0px" fontSize="110px">Thank you!</Heading>
        <Heading margin="0px" padding="0px" fontSize="73px" color="primary">Questions?</Heading>
      </FlexBox>
    </Slide>    
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
