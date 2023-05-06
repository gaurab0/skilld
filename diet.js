const weightLoss = document.getElementById('wloss');
const weightGain = document.getElementById('wgain');
const balancedDiet = document.getElementById('bb');
const ketoegnicDiet = document.getElementById('kdiet');

weightLoss.onclick = WlossText;
weightGain.onclick = wgainText;
balancedDiet.onclick = balancedText;
ketoegnicDiet.onclick = ketoegnicText;
function WlossText() {
    var text = `Weight loss is a gradual process that requires sustainable lifestyle changes. To lose weight, it's important to consume a well-balanced and nutritious diet that includes whole foods like fruits, vegetables, whole grains, lean proteins, and healthy fats. Portion control, mindful eating, and using smaller plates can also help regulate food intake. Incorporating regular physical activity, such as walking, jogging, cycling, or strength training, can burn calories, build muscle, boost metabolism, and improve overall health. Getting enough sleep, maintaining consistent sleep patterns, and staying hydrated by drinking plenty of water are also key components of a successful weight loss plan. Lastly, managing stress with techniques such as meditation, yoga, or deep breathing exercises can prevent overeating and other negative impacts on your weight loss journey. Remember that every person's weight loss journey is unique, so it's important to find a plan that works for you and your lifestyle. Celebrate small victories along the way and maintain a positive attitude towards your journey to achieving a healthier lifestyle. `;
    var displayArea = document.getElementById("myPara");
    displayArea.innerHTML = text;
  }
  function balancedText(){
    var text = 'Maintaining a balanced diet is crucial for overall health and well-being. A balanced diet includes a variety of nutrient-dense foods from all food groups, such as fruits, vegetables, whole grains, lean proteins, and healthy fats. Its important to limit processed foods and foods high in added sugars, sodium, and saturated fats. Incorporating more plant-based foods into your diet, such as legumes, nuts, and seeds, can help increase fiber intake and improve overall health. Staying hydrated by drinking plenty of water and limiting sugary drinks is also important. Moderation is key when it comes to indulging in less healthy foods, such as sweets or fast food. Planning meals and snacks ahead of time can help ensure a balanced and nutritious diet. Remember, a balanced diet is not about strict rules or deprivation, but rather about nourishing your body with a variety of healthy foods in moderation';
    var displayArea = document.getElementById("myPara");
    displayArea.innerHTML = text;
  }
  function wgainText(){
    var text = "This is Gaining weight in a healthy way requires a balanced diet and consistent exercise routine. It's important to consume a nutrient-dense and calorie-rich diet that includes high-protein foods like lean meats, fish, eggs, nuts, and legumes, as well as healthy fats like avocados, olive oil, and nut butter. Eating frequently throughout the day and snacking between meals can help increase your calorie intake. Additionally, focusing on strength training exercises that target major muscle groups, such as squats, deadlifts, and bench presses, can stimulate muscle growth and increase overall body weight. Getting enough rest and sleep is also crucial for muscle growth and weight gain. Smoking and excessive alcohol consumption should be avoided as they can negatively affect your appetite and overall health. Consider supplementing your diet with protein powders or weight gainers, but always consult a healthcare professional before starting any new supplement regimen. Remember that healthy weight gain is a gradual process that requires patience and consistency. Celebrate small progress along the way and find a plan that works for you and your lifestyle. With persistence and dedication, you can achieve your weight gain goals and improve your overall health and well-being. ";
    var displayArea = document.getElementById("myPara");
    displayArea.innerHTML = text;
  }
  function ketoegnicText(){
    var text = `A ketogenic diet is a low-carbohydrate, high-fat diet that has gained popularity for its potential benefits for weight loss and improved health markers. The goal of a ketogenic diet is to enter a state of ketosis, where the body burns fat for fuel instead of carbohydrates. This is achieved by limiting carbohydrate intake to 20-50 grams per day and increasing fat intake to 60-75% of daily calories. Protein intake is also moderate, at around 20-30% of daily calories. Foods allowed on a ketogenic diet include meat, fish, eggs, non-starchy vegetables, healthy fats like avocado and olive oil, and low-carbohydrate nuts and seeds. Foods to avoid include grains, sugars, fruits, and high-carbohydrate vegetables like potatoes and corn. While a ketogenic diet may offer benefits for weight loss and blood sugar control, it is not suitable for everyone, and may have potential side effects such as the "keto flu" and increased risk of nutrient deficiencies. It is important to consult a healthcare professional before starting a ketogenic diet.`;
    var displayArea = document.getElementById("myPara");
    displayArea.innerHTML = text;
  }

