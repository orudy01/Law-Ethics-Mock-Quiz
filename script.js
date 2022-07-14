const quizData = [
    {
        question: "A therapist meets with a 25-year-old woman who lives at home with her parents. The client reports feeling extremely depressed, has a history of self-harm, and after a suicide assessment, the therapist determines she is at a high risk of serious self-harm. The client reports she does not have insurance and cannot afford to be hospitalized. How should the therapist address theethical and legal issues in this case?",

        a: "Notify client's parents and refer client for a low fee psychiatric evaluation.",
        b: "Initiate a 5150 because the client may need to be hospitalized",
        c: "Explore low fee resources to meet client's financial needs",
        d: "Notify client's parents of her plans and safety plan with client.",
        answer: 'b'
    },

    {
        question: "A 13-year old boy discloses a history of sexual abuse. He informs the therapist that his former therapist touched him during several sessions to demonstrate what is appropriate versus sexually inappropriate touch. What actions should the therapist take to address the legal issues in this case?",

        a: "Maintain confidentiality and provide BBS brochure.",
        b: "Call police and inform his parents.",
        c: "Report to CPS and process it with client.",
        d: "Report misconduct of therapist to BBS and document in file.",
        answer: 'c'
    },

    {
        question: "A therapist working in a community agency receives a referral for a child with severe PTSD from sexual abuse. The therapist has no training or experience treating children with PTSD from sexual abuse. The therapist should:",

        a: "Attend a training on PTSD in children.",
        b: "Conduct an initial assessment and make treatment recommendations.",
        c: "Refer the child to appropriate services.",
        d: "Treat the child after getting consultation.",
        answer: 'c'
    },

    {
        question: "After referring a client to an acupuncturist for treatment the acupuncturist calls the therapist and invites him to lunch to discuss how they can work together. He tells the therapist that he is willing to pay for referrals. How should the therapist manage the legal and ethical issues in this situation?",

        a: "Discuss how much he wants to be paid per client.",
        b: "Decline the lunch invitation because of client's confidentiality..",
        c: "Inform him that he cannot accept payment for referrals.",
        d: "Discuss how the therapist can pay acupuncturist for referrals as well.",
        answer: 'c'
    },

    {
        question: "A younger therapist has been treating a 60-year-old Navajo woman for 3 months and has a particularly ground-breaking session. At the next session, she arrives with a gift, a beautiful handmade blanket. After the therapist explains that it would be unethical to accept the gift, the woman appears insulted and quietly mumbles that she wishes to end the session and discontinue therapy. Ethically, the therapist should have:",

        a: "Accepted the gift, but leave it in the office to use.",
        b: "Accepted the gift and discussed its significance.",
        c: "Consulted with a supervisor regarding the appropriateness of accepting the gift.",
        d: "Declined the gift, which was the most appropriate course.",
        answer: 'b'
    },
    //5
    {
        question: "During the sixth session with a 64-year-old man he breaks down in tears while discussing his relationship with his estranged 40- year-old son. He confesses that when his son was younger the client was physically abusive to his son on a number of occasions, especially when the client had been drinking. He says that besides his wife, he’s never told this to anyone before. How should the therapist manage the legal obligations in this case?",

        a: "Explore client's feelings about disclosure and document the session in his record.",
        b: "Inform the client that child abuse is a mandated report and file a report.",
        c: "Review the limits of confidentiality and determine whether the client is currently abusing any minors.",
        d: "Maintain confidentiality of the reported abuse and document session in his record.",
        answer: 'd'
    },

    {
        question: "A therapist has been treating a 42 year-old, single man for five months. The client is a successful partner at a prestigious law firm. For the past month, the client has noticed improvements in his mood and his relationships with others. Around the holidays the client leaves the therapist a bottle of wine outside the office as an expression of his gratitude. What action should the therapist take to address the ethical issues in the case?",

        a: "Accept the gift graciously during the next session.",
        b: "Explain to the client that the therapist is not allowed to accept gifts.",
        c: "Assist the client in finding someone else in his life he could give the wine to as an expression of gratitude.",
        d: "Determine the estimated value of the wine.",
        answer: 'd'
    },

    {
        question: "A therapist at a mental health clinic meets with a single mother who recently moved back in with her mom and step-dad after losing her job. She reports that her stepdad has been threatening to kick her out of the house if she does not contribute more to the household needs. The client says that she is afraid to be around him. What should the therapist do FIRST?",

        a: "Discuss alternate housing possibilities to empower the client.",
        b: "Encourage the client to call the police.",
        c: "Ask the client why she is afraid.",
        d: "Develop a safety plan and monitor the client's safety.",
        answer: 'c'
    },

    {
        question: "A therapist attends a group consultation. Another therapist begins presenting a case and based on the information the therapist realizes that she is friends with the client. How should the therapist deal with the realization?",

        a: "Disclose to the group that she is friends with client.",
        b: "Keep all information about the client confidential.",
        c: "Excuse herself from the discussion of the client.",
        d: "Not disclose that she knows the client but refrain from participating in the discussion.",
        answer: 'c'
    },

    {
        question: "A long-term client comes to therapy and reports that he has been evicted and is in need of housing immediately. The therapist’s brother owns an apartment building and has an available unit he’s been struggling to rent. The therapist should:",

        a: "Provide the client with the brother’s number without disclosing the relationship.",
        b: "Refer the client to several apartments, including the one owned by the brother.",
        c: "Assist the client in coming up with short and long-term solutions.",
        d: "Refer the client to several apartments, including the one owned by the brother, and disclose the relationship.",
        answer: 'c'
    },
    //10
    {
        question: "A client seeks therapy to help deal with problems with a roommate. After two sessions, the therapist realizes that the client’s roommate is a personal friend who has often confided in the therapist about difficulties with this relationship. How should the therapist address the ethical issues in this case?",

        a: "Continue working with the client without revealing the therapist's relationship with the client's roommate.",
        b: "Explain to the client the therapist’s relationship with the roommate and allow the client to decide whether or not to continue treatment with the therapist.",
        c: "Tell the client about the therapist’s relationship with the roommate and refer the client to another therapist.",
        d: "Tell the client about the therapist’s relationship with the roommate and explore how it could affect the therapeutic relationship.",
        answer: 'c'
    },

    {
        question: "A long-term client being treated for bipolar disorder announces her pregnancy and her intent to continue taking lithium medication despite possible negative effects to the fetus. Her psychiatrist has informed her of the consequences but agreed to continue monitoring her medication. The therapist has a negative emotional reaction to the client’s decision. Ethically, the therapist should:",

        a: "Express a genuine sense of being perplexed by the client’s decision.",
        b: "Contact the psychiatrist and share concerns.",
        c: "File a child abuse report.",
        d: "Take appropriate steps to manage countertransference.",
        answer: 'd'
    },

    {
        question: "A client receives treatment for substance abuse by a therapist who is a recovering alcoholic. During the course of this client's treatment, the therapist begins to experience cravings and begins to use alcohol after sessions with this client. Which of the following actions should the therapist take in order to address the ethical issues in this situation?",

        a: "Terminate services with the client immediately.",
        b: "Seek immediate consultation to resolve countertransference issues.",
        c: "Seek alcohol treatment to address relapse.",
        d: "Share feelings with client as way of creating a supportive common ground of experience.",
        answer: 'c'
    },

    {
        question: "A woman calls a therapist at an agency and informs the therapist that her brother received therapy from another therapist in the same agency and a business relationship developed between that therapist and the client’s brother. How should the therapist manage the ethical issue in this case?",

        a: "Discuss ethical expectations around dual relationships with the client.",
        b: "Assist the woman in filing a complaint with the licensing board.",
        c: "Confront the colleague regarding the alleged ethical violation.",
        d: "Review agency’s policies regarding unethical behavior of therapists.",
        answer: 'c'
    },

    {
        question: "A therapist is meeting with a 16-year-old boy who reports he recently broke into his parents locked liquor cabinet when they were sleeping and got drunk. What legal responsibilities does the therapist have in this case?",

        a: "File a report with CPS for neglect and document it in the record.",
        b: "Maintain confidentiality and assess for risk.",
        c: "Inform client that his parents must be informed and document it in the record.",
        d: "Maintain confidentiality and safety plan with client.",
        answer: 'b'
    },
    //15
    {
        question: "A licensed therapist moves to another city in a different part of the state and relocates his private practice. What are his legal obligations in this case?",

        a: "Maintain the same system he was previously using for record keeping.",
        b: "Provide all of his previous clients with his new office address.",
        c: "Notify the Board of Behavioral Sciences of his change of address within 30 days.",
        d: " Provide all of his previous clients with his new office address.",
        answer: 'c'
    },

    {
        question: "A therapist lowered his fee for a client following the client losing his job. The client informs the therapist that he was able to find a new job that pays even more than his former job. The therapist would like to raise fees now that the client’s financial situation has improved. How should the therapist ethically manage the situation?",

        a: "Inform the client of the need to raise fees and provide one month’s notice of increase.",
        b: "Reassess the change in client’s situation and raise it in an agreed about amount of time.",
        c: "Ask client when he plans to pay the full fee again and document it in his record.",
        d: "Provide client with a written notice of the fee policy and discuss implications.",
        answer: 'b'
    },

    {
        question: "A therapist has terminated with her client due to presenting issue being outside the therapist’s scope of competence. The client was provided with a referral and has a first session with the new therapist scheduled. Prior to meeting with the new therapist, the client experiences a crisis situation and contacts the old therapist. What are the therapist’s legal obligations in this case?",

        a: "Provide client with a crisis hotline number.",
        b: "Talk with client and help address crisis since she has not started with the new therapist.",
        c: "Contact her new therapist to inform them of client’s situation.",
        d: "Tell client you are unable to provide services and they should contact new therapist.",
        answer: 'b'
    },

    {
        question: "A 14-year-old girl consents to her own treatment after the therapist determined it would not be appropriate to involve parents. After several sessions, the girl tells the therapist that she would like to include her mother in treatment. How should the therapist manage the legal issue of fees?",

        a: "Inform the client that she will continue to be responsible for fees.",
        b: "Inform the client that once the mother is involved in treatment that she will be responsible for fees.",
        c: "Inform client the mother does not have a responsibility to make payment regardless of involvement.",
        d: " Inform client that both she and mother will be responsible for payment.",
        answer: 'a'
    },

    {
        question: "An 83-year-old man is brought to therapy by his conservator. The conservator is concerned the man is experiencing symptoms of depression and could benefit from therapy. Legally, who should sign the consent?",

        a: "Client",
        b: "Conservator",
        c: "Client’s doctor",
        d: " Court",
        answer: 'b'
    },
    //20
    {
        question: "A therapist receives a phone call from a former client requesting access to his records. The therapist terminated with the client several months back due to lack of payment and sent the client’s information to a collection’s agency in an effort to collect the outstanding balance. Ethically, how should the therapist respond to the client’s request?",

        a: "Inform the client that he will be required to communicate directly with collection agency prior to accessing records.",
        b: "Provide client with access to records within 5 business days of request.",
        c: "Require client to pay balance prior to allowing access to records.",
        d: "Inform client that he can access his records within 5 business days after therapist receives written request.",
        answer: 'd'
    },

    {
        question: "A therapist is treating a client with a history of suicide attempts and multiple hospitalizations. During a session, the client reports a plan to take all his prescription medications at once. He refuses to contact his psychiatrist. How should the therapist legally manage this crisis?",

        a: "Contact a family member for a 24-hour watch.",
        b: "Increase the frequency of the sessions.",
        c: "Have the client sign a no suicide contract.",
        d: "Call Psychiatric Emergency Team (PET) and initiate 5150.",
        answer: 'd'
    },

    {
        question: "A therapist has been treating a 16-year-old girl for depression and social phobia. The client recently shared that she is being bullied at school by some older girls. The following day her mother calls the therapist and reports that she thinks her daughter took some pills. What should the therapist do NEXT?",

        a: "Explain to the mother that the therapist does not have a release to talk about client.",
        b: "Ask the mother to put the client on the phone.",
        c: "Determine the type and quantity of pills taken.",
        d: "Direct the mother to call 911.",
        answer: 'd'
    },

    {
        question: "During a session with a 16-year-old, a therapist learns that the client has been having strong suicidal ideation for the last week. The client has a tentative plan and access to means. What should the therapist do to manage the legal and ethical obligations in this case?",

        a: "Initiate an involuntary hospitalization",
        b: "Inform the client that her parents must be informed.",
        c: "Provide the client with the number for a suicide prevention hotline.",
        d: "Explore the events leading up to the client’s suicidal feelings.",
        answer: 'b'
    },

    {
        question: "A therapist at a women’s shelter is asked to see a woman in crisis who has been abused by her husband. The woman enters the therapist’s office stating that she plans to return home in the morning and “just needed to spend the night somewhere else and talk to someone about this.” What action should the therapist take to manage legal obligations in this case?",

        a: "Explore the woman’s reasons for wanting to return home.",
        b: "Encourage the woman to address her feelings about her husband.",
        c: "Provide psychoeducation on the cycle of violence.",
        d: "Develop a safety plan with the woman.",
        answer: 'd'
    },
    //25
    {
        question: "A therapist has been working with a Mexican American family to address communication problems and recent loss of the grandmother. At the beginning of a session, the mother gives the therapist an assortment of freshly baked home goods and expresses her appreciation to the therapist for continued support of the family. How should the therapist manage the ethical issues in this case?",

        a: "Accept the gift and process the meaning of it with the family.",
        b: "Determine the value of the gift prior to accepting it.",
        c: "Consult with a colleague who is knowledgeable about Mexican American culture.",
        d: "Explain to the family that it is your agency’s policy not to accept gifts from clients.",
        answer: 'a'
    },

    {
        question: "A therapist is completing a psychosocial assessment with a 45-year-old woman. While asking about the client's current stressors, the therapist learns that the client has been out of work for the past year. The client also reports that she has been emotionally and physically abused by her spouse. The therapist should FIRST help the woman to:",

        a: "Stay safe by developing a plan of action should the abuse escalate.",
        b: "Collaborate on ways to manage the husband’s anger.",
        c: "Create a plan to leave her spouse.",
        d: "Re-establish her sense of self-worth and independence by finding employment.",
        answer: 'a'
    },

    {
        question: "A 23-year-old female client with a diagnosis of Bipolar I informs her therapist that her father is petitioning the court to be appointed her conservator. The client does not agree with her father’s position and asks the therapist to evaluate her and testify at the court hearing on her behalf. How should the therapist address the legal issue in this case?",

        a: "Inform the client that she will appear at the court hearing.",
        b: "Explain the request is outside the therapist’s scope of practice.",
        c: "Agree to testify if the therapist does not believe the client is a danger to self.",
        d: "Consult with colleagues to discuss benefits of testifying.",
        answer: 'b'
    },

    {
        question: "A client calls the therapist and requests access to her records. The therapist determines that there is no reason to withhold access. Legally, the therapist should comply with the request within which time frame?",

        a: "2 days to inspect; 5 days for summary; 10 days for copy",
        b: "5 days to inspect; 10 days for summary; 15 days for copy",
        c: "5 days to inspect; 15 days for summary; 20 days for copy",
        d: "1 week to inspect; 10 days for summary; 15 days for copy",
        answer: 'b'
    },

    {
        question: "A school therapist has been meeting with a 16-year-old boy who has been experiencing academic difficulties at school. During the second meeting, the teen reports that he has been having difficulties concentrating in school due to an intimate relationship with another male classmate. The student states that he hasn’t told his parents he is gay and is afraid to do so. The teen’s parents have provided written authorization for the therapist to provide treatment to the student and recently submitted a request for a copy of his records. The therapist had made note in the record of the boy’s relationship with his classmate. What should the therapist do FIRST to manage the legal and ethical issues in this case?",

        a: "Discuss the request with client.",
        b: "Obtain an authorization of release from client.",
        c: "Give the parents full access to the records.",
        d: "Provide parents with a treatment summary.",
        answer: 'a'
    },
    //30
    {
        question: "A client seeks therapy for the first time. During the initial session, the therapist learns that the client’s father committed suicide four years ago that month. The client shares that he wonders if his father did the right thing because life is so hard. The therapist should NEXT:",

        a: "A. Ask if the client has thoughts of hurting himself.",
        b: "B. Determine whether the client has the means to hurt himself.",
        c: "C. Explore the father’s mental health history.",
        d: "D. Provide the client with a suicide hotline number.",
        answer: 'a'
    },

    {
        question: 'A therapist has been seeing a client diagnosed with Borderline Personality Disorder for several years. The client requests access to her therapy records to figure out "just how crazy" she is. The therapist refuses her request after determining it would be damaging to her well-being if she were to see the records. The following morning, upon arriving at the office, the therapist discovers the client has broken into the office and is rummaging through all of the client files. Legally, the therapistshould:',

        a: "Contact the police immediately and thoroughly document the incident.",
        b: "Call the police immediately and notify affected clients, unless clinically advisable not to.",
        c: "Attempt to calm the client down, discuss the incident and terminate with her.",
        d: "Attempt to calm the client down, try to resolve the issue and continue therapy.",
        answer: 'b'
    },

    {
        question: "A therapist is named in a professional will and after a colleague passes away suddenly the therapist inherits the colleagues clients and files. When reviewing the files of current clients, the therapist notes that the colleague did not keep records according to the standard of care as the files often did not include treatment plans or progress updates. How should the therapist proceed with these new clients?",

        a: "Modify the records to meet the standard of care.",
        b: "Inform the clients that their records are inadequate.",
        c: "Create new files for the clients.",
        d: "Provide the client’s with a copy of their records.",
        answer: 'c'
    },

    {
        question: "A couple in therapy receives notice from insurance that sessions are not covered. They ask the therapist to change the diagnosis so they can be reimbursed. How should the therapist respond?",

        a: "Change diagnosis.",
        b: "Appeal decision of insurance company.",
        c: "Inform couple the diagnosis cannot be changed because it is illegal.",
        d: "Inform couple the diagnosis cannot be changed because it is unethical.",
        answer: 'c'
    },

    {
        question: "A client is moving and requests a copy of her records. If the therapist is a HIPAA covered entity he must:",

        a: "Obtain a signed waiver of privilege.",
        b: "Inform the client of any possible negative outcomes of releasing records.",
        c: "Release only the medical record.",
        d: "Release both the medical record and the psychotherapy notes.",
        answer: 'c'
    },
    //35
    {
        question: "A 75-year-old man has been in counseling for five months for depression. He has developed a good relationship with the therapist and he has been making significant progress in recent months. The client lives on a fixed income and reports that his rent has increased and he does not think he can afford to continue with therapy. The therapist should initially:",

        a: "Refer client to a therapist who accepts sliding scale referrals.",
        b: "Consider reducing session fees to accommodate his ability to pay.",
        c: "Determine if client has family members who can provide additional financial support.",
        d: "Refer the client to a depression support group for older individuals.",
        answer: 'b'
    },

    {
        question: "A therapist is contacted by a representative of the managed care company to conduct a utilization review. The representative requests specific details about the sexual abuse incidents the client experienced. The therapist should FIRST:",

        a: "Refuse to give specific information to the reviewer.",
        b: "Obtain a release of information from the client prior to providing information.",
        c: "Provide all requested information to the reviewer.",
        d: "Review the managed care company contract prior to providing information.",
        answer: 'd'
    },

    {
        question: "A client seeks therapy for depression. She shares with the therapist that she doesn’t have the money to pay for therapy and wants to know if the therapist will bill her under her sister’s insurance. How should the therapist proceed?",
        a: "Agree to her request if sister gives permission.",
        b: "Inform the client that her request in unethical.",
        c: "Deny her request and provide her with low-fee referrals.",
        d: "Deny her request and report her to the insurance company.",
        answer: 'c'
    },

    {
        question: "A therapist and a colleague share an office suite and decide to joint advertise in a local magazine. Joint advertising is:",

        a: "Illegal and unethical",
        b: "Legal and Ethical as long as they form a legal partnership",
        c: "Legal and Ethical as long as they are both licensed",
        d: "Legal and Ethical as long as they notify clients as to whether they are sole practitioners or a legal partnership.",
        answer: 'd'
    },

    {
        question: "A woman is referred by another client and is excited to learn that the therapist is on her insurance panel. She informs the therapist that she has been in therapy in the past for depression and always paid out of pocket. She states that she would like to use her insurance, but expresses concern with how much information the therapist would need to share. How should the therapist respond?",

        a: "Ask client to clarify her concerns regarding sharing of information.",
        b: "Inform client you will be required to only share information related to diagnosis and treatment.",
        c: "Inform client that the insurance company is able to audit client records at any time and encourage her to read her policy.",
        d: "Inform client her health information is considered private and no information will be shared.",
        answer: 'c'
    },
    //40
    {
        question: "A therapist is developing a website to promote her private practice. It would be unethical to:",

        a: "Highlight the therapist’s expertise.",
        b: "Share extensive information about the therapist’s training and background.",
        c: "Include information about the therapist’s fees and sliding scale.",
        d: "Collect clients’ testimonials highlighting the effectiveness of treatment.",
        answer: 'd'
    },

    {
        question: "A 76-year-old woman comes to therapy complaining of depression and loneliness. At the end of the first session she states that she is looking forward to being in therapy since her last therapist helped alleviate her loneliness quite a bit. “He held me in his arms, caressed and kissed me during the sessions. A few times, when I asked him to, we even had sex and that helped me feel better as well.” The therapist’s best course of action is?",

        a: "Discuss the client’s expectations for therapy and encourage the client to file a report with an ethics board.",
        b: "Provide the client with the brochure “Professional Therapy Never Includes Sex” and make an elder abuse report.",
        c: 'Report the colleague to appropriate authorities and provide the client with the brochure “Professional Therapy Never Includes Sex."',
        d: "Provide the client with the brochure “Professional Therapy Never Includes Sex” and encourage the client to file a report with an ethics board.",
        answer: 'd'
    },

    {
        question: "A client returns to therapy after four years. Legally, the therapist should first:",

        a: "Obtain a new informed consent.",
        b: "Find out if the client saw any other therapists during the break.",
        c: "Review the client’s previous record.",
        d: "Explore the client’s expectations of treatment.",
        answer: 'a'
    },

    {
        question: "A therapist has been treating a client for 6 months when the client states that she will be leaving town for a few months. The client asks if she can use email to keep in touch with the therapist while she is away. The therapist should FIRST:",

        a: "Address the limits and risks of using email with the client.",
        b: "Provide the client with a referral to a therapist in the area where the client will be living.",
        c: "Discuss the option of doing weekly phone sessions while the client is away.",
        d: "Discontinue therapy until the client is back.",
        answer: 'a'
    },

    {
        question: "When discussing the fee with a potential new client, a therapist learns that the client recently lost her job and is living off her savings. Even after sliding the fee to the lowest amount, the client states that she only thinks she can afford four or five sessions. The therapist should:",

        a: "Agree to see her at the reduced rate.",
        b: "Lower the rate to accommodate her situation.",
        c: "Find out what issues the client hopes to deal with in therapy.",
        d: "Refer the client to low-fee mental health services.",
        answer: 'd'
    },
    //45
    {
        question: "For a HIPAA transaction a therapist should use which of the following identifications?",

        a: "License number",
        b: "Social security number",
        c: "National provider identifier",
        d: "Tax ID number",
        answer: 'c'
    },

    {
        question: "A client has ignored four written requests regarding payment for services rendered from a therapist in private practice. The therapist plans to inform the client of the decision to proceed with termination for nonpayment at the next regularly scheduled session. Before proceeding with termination, the therapist should FIRST:",

        a: "Explore client’s feelings about the written requests.",
        b: "Examine the temporary option of reducing fees for ongoing services.",
        c: "Make certain that the client fully understands the details of the payment for service agreement.",
        d: "Explore the possibility that nonpayment may represent an unconscious resistance to therapy.",
        answer: 'c'
    },

    {
        question: "A client seeks therapy for depression and discloses that she engages in non-suicidal cutting and has a history of sexual abuse as a child. The therapist has no experience in this area and feels uncomfortable working with the client. How should the therapist proceed?",

        a: "Find a therapist skilled in the area to whom the client can be referred.",
        b: "Seek training in the area of self harm and early trauma.",
        c: "Help the client decrease the urges to cut.",
        d: "Find an experienced therapist who would be willing to provide supervision.",
        answer: 'a'
    },

    {
        question: "A therapist meets with a single parent struggling to provide adequate housing, food, and health care for himself and his two younger children. What action should the therapist take to manage legal obligations in this case?",

        a: "Help client develop coping skills to deal with stressors.",
        b: "File a report regarding possible neglect.",
        c: "Provide client with information about financial services.",
        d: "Provide client with referrals for services that meet his specific needs.",
        answer: 'd'
    },

    {
        question: "A therapist sees a 75-year old Asian American man whose wife died six months ago. In the intake interview, the client reports that he has lost weight, has very little energy, and has difficulty getting himself to do things. What should the therapist do first:",

        a: "Complete a suicide risk assessment of the client.",
        b: "Explore available family and community resources.",
        c: "Suggest the client schedule an appointment with his doctor.",
        d: "Refer the client to a local bereavement group.",
        answer: 'a'
    },
    //50
]
const quizDataB = [
    {
        question: "",

        a: "",
        b: "",
        c: "",
        d: "",
        answer: ''
    },
]

let questionNum = document.getElementById("qNum");
let questionText = document.getElementById("qText");

let aChoice = document.getElementById("questionA");
let bChoice = document.getElementById("questionB");
let cChoice = document.getElementById("questionC");
let dChoice = document.getElementById("questionD");

let choices = document.querySelectorAll("input[name=quizChoice]");

let aBox = document.querySelector(".aAnswer");
let bBox = document.querySelector(".bAnswer");
let cBox = document.querySelector(".cAnswer");
let dBox = document.querySelector(".dAnswer");

let choiceContainer = document.querySelector(".choices-container");
let button = document.getElementById("submit");

const totalQuestions = 50;
let currentDataNum = 0;
let totalCorrect = 0;
let userAnswer = undefined;
let questionAnswer = undefined;
let answerBox = undefined;
let firstTry = true;

function loadQuiz() {
    //unclick options
    choices.forEach(choice => {
        if (choice.checked === true) {
            choice.checked = false;
        }
    })

    //load proper data
    let data = quizData[currentDataNum];

    questionNum.innerText = "Question " + (currentDataNum + 1);
    questionText.innerText = data.question;

    aChoice.innerText = data.a;
    bChoice.innerText = data.b;
    cChoice.innerText = data.c;
    dChoice.innerText = data.d;

    questionAnswer = data.answer;

    //increment
    currentDataNum++;
}
function loadMasterQuiz() {
    loadQuiz();
    showAnswer();
}

function submit() {
    //get user choice
    getChoice();

    //proceed once user selects somthing
    if (userAnswer != undefined) {
        checkAnswer();

        //check if quiz has more questions
        if (currentDataNum != totalQuestions) {
            let nextQuestion = setTimeout(loadQuiz, 1200)
            userAnswer = undefined;
        }
        //no more questions in quiz
        else {
            let end = setTimeout(endQuiz, 1200);
        }
    }

}

function getChoice() {
    choices.forEach(choice => {
        if (choice.checked === true) {
            userAnswer = choice.id;
        }
    })
}


function checkAnswer() {

    //correct case
    if (userAnswer == questionAnswer) {
        totalCorrect++;
        switch (userAnswer) {
            case 'a':
                aBox.classList.add('green-glow');
                setTimeout(function () { aBox.classList.remove('green-glow') }, 1200)
                break;
            case 'b':
                bBox.classList.add('green-glow');
                setTimeout(function () { bBox.classList.remove('green-glow') }, 1200)
                break;
            case 'c':
                cBox.classList.add('green-glow');
                setTimeout(function () { cBox.classList.remove('green-glow') }, 1200)
                break;
            case 'd':
                dBox.classList.add('green-glow');
                setTimeout(function () { dBox.classList.remove('green-glow') }, 1200)
                break;
        }
    }
    else {
        switch (userAnswer) {
            case 'a':
                aBox.classList.add('red-glow');
                setTimeout(function () { aBox.classList.remove('red-glow') }, 1200)
                break;
            case 'b':
                bBox.classList.add('red-glow');
                setTimeout(function () { bBox.classList.remove('red-glow') }, 1200)
                break;
            case 'c':
                cBox.classList.add('red-glow');
                setTimeout(function () { cBox.classList.remove('red-glow') }, 1200)
                break;
            case 'd':
                dBox.classList.add('red-glow');
                setTimeout(function () { dBox.classList.remove('red-glow') }, 1200)
                break;
        }
        switch (questionAnswer) {
            case 'a':
                aBox.classList.add('green-glow');
                setTimeout(function () { aBox.classList.remove('green-glow') }, 1200)
                break;
            case 'b':
                bBox.classList.add('green-glow');
                setTimeout(function () { bBox.classList.remove('green-glow') }, 1200)
                break;
            case 'c':
                cBox.classList.add('green-glow');
                setTimeout(function () { cBox.classList.remove('green-glow') }, 1200)
                break;
            case 'd':
                dBox.classList.add('green-glow');
                setTimeout(function () { dBox.classList.remove('green-glow') }, 1200)
                break;
        }

    }
}

function endQuiz() {
    questionNum.innerText = "Quiz completed!";
    choiceContainer.style.display = "none";
    button.removeAttribute("onclick");
    button.setAttribute("onclick", "reviewQuiz()");
    button.innerText = "Review Quiz with Answers";
    if(firstTry === false){
        questionText.innerText = `Original final score was ${totalCorrect}/${totalQuestions}`
        button.innerText="Retake Quiz";
        button.removeAttribute("onclick");
        button.setAttribute("onclick", "restartQuiz()");
    }
    else{
        questionText.innerText = `Final score is ${totalCorrect}/${totalQuestions}`
    }
}


function showAnswer() {
    switch (questionAnswer) {
        case 'a':
            answerBox = aBox;
            break;
        case 'b':
            answerBox = bBox;
            break;
        case 'c':
            answerBox = cBox;
            break;
        case 'd':
            answerBox = dBox;
            break;
    }
    answerBox.classList.add('green-glow');
}

function nextAnswer() {
    answerBox.classList.remove("green-glow");
    if (currentDataNum != totalQuestions) {
        loadMasterQuiz();
    }
    else{
        firstTry = false;
        endQuiz();
    }
}

function reviewQuiz() {
    currentDataNum = 0;
    choiceContainer.style.display = "block";
    button.innerText = "Next"
    button.removeAttribute("onclick");
    button.setAttribute("onclick", "nextAnswer()");
    loadMasterQuiz();
}

function restartQuiz() {
    window.location.reload();
}



loadQuiz();
