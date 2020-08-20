import Plan from './classes.js';

let prices = {};

prices = {
  line1: 75,
  line2: 130,
  line3: 155,
  line4: 180,
  line5: 205,
  line6: 230,
  line7: 255,
  line8: 280,
  line9: 310,
  line10: 340,
  line11: 370,
  line12: 400,
};

const magVoice = new Plan(2, prices);

prices = {
  line1: 90,
  line2: 150,
  line3: 185,
  line4: 220,
  line5: 255,
  line6: 290,
  line7: 325,
  line8: 360,
  line9: 400,
  line10: 440,
  line11: 480,
  line12: 520,
};

const magPlus = new Plan(3, prices);

prices = {
  line1: 65,
  line2: 100,
  line3: 120,
  line4: 140,
  line5: 160,
  line6: 180,
  line7: 'N/A',
  line8: 'N/A',
  line9: 'N/A',
  line10: 'N/A',
  line11: 'N/A',
  line12: 'N/A',
};

const essVoice = new Plan(4, prices);

prices = {
  line1: 45,
  line2: 65,
  line3: 'N/A',
  line4: 'N/A',
  line5: 'N/A',
  line6: 'N/A',
  line7: 'N/A',
  line8: 'N/A',
  line9: 'N/A',
  line10: 'N/A',
  line11: 'N/A',
  line12: 'N/A',
};

const ess55 = new Plan(5, prices);

prices = {
  line1: 55,
  line2: 80,
  line3: 'N/A',
  line4: 'N/A',
  line5: 'N/A',
  line6: 'N/A',
  line7: 'N/A',
  line8: 'N/A',
  line9: 'N/A',
  line10: 'N/A',
  line11: 'N/A',
  line12: 'N/A',
};

const mag55 = new Plan(6, prices);

prices = {
  line1: 60,
  line2: 90,
  line3: 105,
  line4: 120,
  line5: 135,
  line6: 150,
  line7: 175,
  line8: 200,
  line9: 225,
  line10: 250,
  line11: 275,
  line12: 300,
};

const magMil = new Plan(7, prices);

prices = {
  line1: 'N/A',
  line2: 110,
  line3: 135,
  line4: 160,
  line5: 185,
  line6: 210,
  line7: 245,
  line8: 280,
  line9: 315,
  line10: 350,
  line11: 285,
  line12: 420,
};

const magMilPlus = new Plan(8, prices);

prices = {
  line1: 'N/A',
  line2: 'N/A',
  line3: 'N/A',
  line4: 120,
  line5: 145,
  line6: 170,
  line7: 'N/A',
  line8: 'N/A',
  line9: 'N/A',
  line10: 'N/A',
  line11: 'N/A',
  line12: 'N/A',
};

const valEssVoice = new Plan(9, prices);

prices = {
  line1: 60,
  line2: 90,
  line3: 105,
  line4: 120,
  line5: 135,
  line6: 150,
  line7: 165,
  line8: 180,
  line9: 195,
  line10: 210,
  line11: 225,
  line12: 240,
};

const firRes = new Plan(10, prices);

prices = {
  line1: 'N/A',
  line2: 110,
  line3: 135,
  line4: 160,
  line5: 185,
  line6: 210,
  line7: 235,
  line8: 260,
  line9: 285,
  line10: 310,
  line11: 335,
  line12: 360,
};

const firResPlus = new Plan(11, prices);

prices = {
  line1: 'N/A',
  line2: 100,
  line3: 'N/A',
  line4: 'N/A',
  line5: 'N/A',
  line6: 'N/A',
  line7: 'N/A',
  line8: 'N/A',
  line9: 'N/A',
  line10: 'N/A',
  line11: 'N/A',
  line12: 'N/A',
};

const mag55Plus = new Plan(12, prices);

const plans = [firRes, firResPlus, magVoice, magPlus,
  essVoice, ess55, valEssVoice, mag55, magMil, magMilPlus,
  mag55Plus];

export default plans;
