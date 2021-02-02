const questionData = [{
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    a: 'Arcu non sodales neque sodales.',
    b: 'Morbi blandit cursus risus at ultrices mi tempus imperdiet.',
    c: 'Luctus accumsan tortor posuere ac ut consequat semper viverra.',
    d: 'Varius sit amet mattis vulputate enim.',
    answer: 0
},
{
    question: 'Mauris ultrices eros in cursus. Vestibulum lorem sed risus ultricies.',
    a: 'Ac felis donec et odio pellentesque diam volutpat commodo sed.',
    b: 'Suscipit tellus mauris a diam maecenas sed enim ut.',
    c: 'Integer quis auctor elit sed vulputate mi.',
    d: 'Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat.',
    answer: 0
},
{
    question: 'Vitae ultricies leo integer malesuada nunc vel risus.',
    a: 'Eget nulla facilisi etiam dignissim diam quis. ',
    b: 'Quis varius quam quisque id diam vel quam elementum.',
    c: 'Faucibus nisl tincidunt eget nullam non.',
    d: 'Maecenas accumsan lacus vel facilisis volutpat est velit egestas.',
    answer: 0
}]

const qContainer = document.getElementById('questions')
const rContainer = document.getElementById('results')

const qEl = document.getElementById('question')
const aEl = document.getElementById('a_text')
const bEl = document.getElementById('b_text')
const cEl = document.getElementById('c_text')
const dEl = document.getElementById('d_text')
const cBtn = document.getElementById('submit')

var answers = document.getElementsByName('answer')
var results = document.getElementById('answers-p')


let currentQuestion = 0

loadQuestion()

function loadQuestion(){
    qData = questionData[currentQuestion];
    qEl.innerText = qData.question
    aEl.innerText = qData.a
    bEl.innerText = qData.b
    cEl.innerText = qData.c
    dEl.innerText = qData.d
}


cBtn.addEventListener('click', () => {
    let count = 0, answervalue
    for(var i = 0, length=answers.length; i < length; i++) {
        if(answers[i].checked){
            answervalue = answers[i].value
            answers[i].checked = false
            count++
        }
    }
    if(count > 0){
        questionData[currentQuestion].answer = answervalue
        if(currentQuestion < questionData.length - 1){
            currentQuestion++
            loadQuestion()
        }
        else {
            qContainer.style.display = "none"
            let answerStr = ""
        
            for(var i = 0, length=questionData.length; i < length; i++){
                switch(questionData[i].answer){
                    case '1': answerStr += questionData[i].a  + "<br>"
                    break
                    case '2': answerStr += questionData[i].b  + "<br>"
                    break
                    case '3': answerStr += questionData[i].c  + "<br>"
                    break
                    case '4': answerStr += questionData[i].d  + "<br>"
                    break
                    default: answerStr = "Hata" + "<br>"
                    break
                }
                
            }
            results.innerHTML += answerStr
            rContainer.style.display = "block"
        }
    } else {
        alert('Bir cevap seçmelisiniz.')
    }
})