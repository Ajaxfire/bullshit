// This is a Github fork of a CodePen fork of IFTTT Slottt Machine by Jen Hamon
// Inspiration: Serving the world for over 20 years: https://www.dack.com/web/bullshit.html
// Slot machine inspiration: https://codepen.io/paulstone/pen/RRrQQB

var actionsList =[ 
    'aggregate',
    'architect',
    'benchmark',
    'brand',
    'cultivate',
    'deliver',
    'deploy',
    'disintermediate',
    'disrupt',
    'drive',
    'e-enable',
    'embrace',
    'empower',
    'enable',
    'engage',
    'engineer',
    'enhance',
    'envisioneer',
    'evolve',
    'expedite',
    'exploit',
    'extend',
    'facilitate',
    'generate',
    'grow',
    'harness',
    'implement',
    'incentivize',
    'incubate',
    'innovate',
    'integrate',
    'iterate',
    'leverage',
    'matrix',
    'maximize',
    'mesh',
    'monetize',
    'morph',
    'optimize',
    'orchestrate',
    'productize',
    'recontextualize',
    'redefine',
    'reintermediate',
    'reinvent',
    'repurpose',
    'revolutionize',
    'scale',
    'seize',
    'strategize',
    'streamline',
    'syndicate',
    'synergize',
    'synthesize',
    'target',
    'transform',
    'transition',
    'unleash',
    'utilize',
    'visualize',
    'whiteboard'
]

var adjectivesList =[
    '24/365',
    '24/7',
    'B2B',
    'B2C',
    'back-end',
    'best-of-breed',
    'bleeding-edge',
    'bricks-and-clicks',
    'clicks-and-mortar',
    'collaborative',
    'compelling',
    'cross-platform',
    'cross-media',
    'customized',
    'cutting-edge',
    'distributed',
    'dot-com',
    'dynamic',
    'e-business',
    'efficient',
    'end-to-end',
    'enterprise',
    'extensible',
    'frictionless',
    'front-end',
    'global',
    'granular',
    'holistic',
    'impactful',
    'innovative',
    'integrated',
    'interactive',
    'intuitive',
    'killer',
    'leading-edge',
    'magnetic',
    'mission-critical',
    'next-generation',
    'one-to-one',
    'open-source',
    'out-of-the-box',
    'plug-and-play',
    'proactive',
    'real-time',
    'revolutionary',
    'rich',
    'robust',
    'scalable',
    'seamless',
    'sexy',
    'state-of-the-art',
    'sticky',
    'strategic',
    'synergistic',
    'transparent',
    'turn-key',
    'ubiquitous',
    'user-centric',
    'value-added',
    'vertical',
    'viral',
    'virtual',
    'visionary',
    'web-enabled',
    'wireless',
    'world-class'
]

var nounsList =[
    'action-items',
    'applications',
    'architectures',
    'bandwidth',
    'channels',
    'communities',
    'content',
    'convergence',
    'deliverables',
    'e-business',
    'e-commerce',
    'e-markets',
    'e-services',
    'e-tailers',
    'experiences',
    'eyeballs',
    'functionalities',
    'infomediaries',
    'infrastructures',
    'initiatives',
    'interfaces',
    'markets',
    'methodologies',
    'metrics',
    'mindshare',
    'models',
    'networks',
    'niches',
    'paradigms',
    'partnerships',
    'platforms',
    'portals',
    'relationships',
    'ROI',
    'synergies',
    'web-readiness',
    'schemas',
    'solutions',
    'supply-chains',
    'systems',
    'technologies',
    'users',
    'vertices',
    'web services'
]


function buildSlotItem (text) {
    return $('<div>').addClass('list_item').text(text)
}

function buildSlotContents ($container, wordlist) {
  $items = wordlist.map(buildSlotItem);
  $container.append($items);
}

function popPushNItems ($container, n) {
    $children = $container.find('.list_item');
    $children.slice(0, n).insertAfter($children.last());

    if (n === $children.length) {
      popPushNItems($container, 1);
    }
}

// After the slide animation is complete, we want to pop some items off
// the front of the container and push them onto the end. This is
// so the animation can slide upward infinitely without adding
// infinte div elements inside the container.
function rotateContents ($container, n) {
    setTimeout(function () {
      popPushNItems($container, n);
      $container.css({top: 0});
    }, 300);    
}

function randomSlotttIndex(max) {
  var randIndex = (Math.floor(Math.random() * (max-2))+1);
 // return (randIndex > 10) ? randIndex : randomSlotttIndex(max);
 return randIndex;
}
  
function animateActions() {
  var wordIndex = randomSlotttIndex(actionsList.length);
  $actionbox.animate({top: -wordIndex*150}, 500, 'swing', function () {
    rotateContents($actionbox, wordIndex);
  });
}

function animateAdjectives(){
    var wordIndex = randomSlotttIndex(adjectivesList.length);
    $adjectivebox.animate({top: -wordIndex*150}, 500, 'swing', function () {
      rotateContents($adjectivebox, wordIndex);
    });
}

function animateNouns() {
    var wordIndex = randomSlotttIndex(nounsList.length);
    $nounbox.animate({top: -wordIndex*150}, 500, 'swing', function () {
      rotateContents($nounbox, wordIndex);
    });
}

function mkBull(){
    animateActions();
    animateAdjectives();
    animateNouns();
    return false;
}

$(function () {
  $actionbox = $('#actionbox');
  $adjectivebox = $('#adjectivebox');
  $nounbox = $('#nounbox');
  buildSlotContents($actionbox, actionsList);  
  buildSlotContents($adjectivebox, adjectivesList);  
  buildSlotContents($nounbox, nounsList);  
  
//   setInterval(animateActions, 5000);
//   setInterval(animateAdjectives, 5000);
//   setInterval(animateNouns, 5000);
});