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
    }
]

let questionNum = document.getElementById("qNum");
let questionText = document.getElementById("qText");

let aChoice = document.getElementById("questionA");
let bChoice = document.getElementById("questionB");
let cChoice = document.getElementById("questionC");
let dChoice = document.getElementById("questionD");

let currentDataNum = 0;
const totalQuestions = 5;

function loadQuiz() {
    let data = quizData[currentDataNum];

    questionNum.innerText = "Question " + (currentDataNum + 1);
    questionText.innerText = data.question;

    aChoice.innerText = data.a;
    bChoice.innerText = data.b;
    cChoice.innerText = data.c;
    dChoice.innerText = data.d;

    currentDataNum++;
}

function submit() {
    if (currentDataNum != totalQuestions) {
        loadQuiz();
    }
}


loadQuiz()