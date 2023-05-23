

//Array of Objects
const quiz = [
    {
        q: 'Before starting a new patient on JINARC®, I should:',
        options: [
            '<div class="circle" style="color:white;">A</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Read the Prescribing Information and Prescriber Training</div> ',
            '<div class="circle">B</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Counsel patients about the risk of serious and potentially fatal liver injury associated with JINARC®</div> ',
            '<div class="circle">C</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Order and review baseline liver function tests</div> ',
            '<div class="circle">D</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;All of the above</div> '],
        answer: 3
    },
    {
        q: 'Patients you identify as qualified to receive JINARC® can enroll in the JINARC® RMP in order to be able to receive treatment?',
        options: [
            '<div class="circle" style="color:white;">A</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;TRUE</div> ',
            '<div class="circle" style="color:white;">B</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;FALSE</div>'],
        answer: 0
    },
    {
        q: 'JINARC® is indicated to reduce kidney cyst growth and slow kidney function declne in adults at risk of rapidly progressing autosomal dominant polycystic kidney disease (ADPKD).',
        options: [
            '<div class="circle" style="color:white;">A</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;TRUE</div> ',
            '<div class="circle" style="color:white;">B</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;FALSE</div>'],
        answer: 0
    },
    {
        q: 'At 18th month of continuous JINARC® treatment, your ADPKD patient with no history of elevation of liver enzymes (AST, ALT, TBL) has returned for his/her monthly consultation, which is the appropriate course of action?',
        options: [
            '<div class="circle">A</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Order the 18th month liver function test, evaluate results of LFT, then proceed to write prescription of JINARC®. Advice patient to her next LFT on the 21st month.</div> ',
            '<div class="circle">B</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Order the 18th month liver function test, evaluate results of LFT, then write prescription of JINARC®Advice patient to return next month for her LFT.</div> ',
            '<div class="circle">C</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Advice patient to return for her liver function test on the 21st month, then write prescription of JINARC®good for 3 months.</div> ',
            '<div class="circle">D</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Advice patient to return after two weeks for her liver function test, then write prescription of JINARC®good for 2 weeks</div> '],

        answer: 0
    },
    {
        q: 'Patients can take JINARC® and elect not to have blood tests done.',
        options: [
            '<div class="circle" style="color:white;">A</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;TRUE</div> ',
            '<div class="circle" style="color:white;">B</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;FALSE</div>'],

        answer: 1
    },
    {
        q: 'The primary counseling message I should tell my patients is:',
        options: [

            '<div class="circle">A</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Do not drink alcohol before you take JINARC</div> ',
            '<div class="circle">B</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Stop therapy if ALT or AST is >2 times the ULN</div> ',
            '<div class="circle">C</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; There is a risk of serious and potentially fatal liver injury associated with JINARC® and that blood testing and monitoring is required.</div> ',
            '<div class="circle">D</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Patients need to have blood tests every 18 months</div> '],

        answer: 2
    },
    {
        q: 'Adverse event/safety information should be reported to?',
        options: [

            '<div class="circle">A</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; oppi-pv@otsuka.com.ph</div> ',
            '<div class="circle">B</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  0999-8869-910</div> ',
            '<div class="circle">C</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; www.jinarcrmp.com.ph.</div> ',
            '<div class="circle">D</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  Both A & B</div> '],

        answer: 3
    },
    {
        q: 'The following are mandatory adverse event/safety information to be reported, except:',
        options: [


            '<div class="circle">A</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; FDA Drug Registration Number</div> ',
            '<div class="circle">B</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Otsuka Product Involved</div> ',
            '<div class="circle">C</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Patient Details</div> ',
            '<div class="circle">D</div> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<div class="choices"> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Adverse Event/Safety Information Details</div> '],

        answer: 0
    }



]
