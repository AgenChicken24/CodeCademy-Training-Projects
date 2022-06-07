function initLb() {
    labels = [];
    labelCreater.create('Speed digits color', '--text-color');
    labelCreater.create('Text brakes inactive', '--text-inactive');
    labelCreater.create('Text brakes active', '--speed-digit-active');
    labelCreater.create('Speed digit inactive', '--speed-digit-inactive');
    labelCreater.create('Gear normal', '--gear-normal');
    labelCreater.create('Gear overload', '--gear-overload');
    labelCreater.create('Gear reverse', '--gear-reverse');
    labelCreater.create('RPM background', '--rpm-background');
    labelCreater.create('RPM fill', '--rpm-fill');
    labels = labelCreater.labels;
}

let pickers = []
const labelCreater = {
  _labels: [],
  create(label, variable) {
    let obj = {
      label,
      variable
    };
    this._labels.push(obj);
  },
  get labels() {
    return this._labels;
  }
}
let labels = [];
let divarr = []
let count = 9;
initLb();
for (let i = 0; i < count; i++) {
    const pickrContainer = document.querySelector('.pickr-container');
    const el = document.createElement('p');
    const div = document.createElement('div');
    const lab = document.createElement('p');
    div.classList.add('mainPicker');
    lab.classList.add('colorText'+i);
    pickrContainer.appendChild(div);
    div.appendChild(lab);
    let stor = labels[i];
    lab.innerText = stor.label;
    console.log('stor.label', stor.label);
    console.log('stor.variable', stor.variable);
    console.log('.colorText'+i)
    $('.colorText'+i).attr('data-local', stor.variable);
    divarr.push(div);
    div.appendChild(el);
    let pickr = new Pickr(Object.assign({
    el,
    theme: 'classic',
    default: '#42445a'
    }, {
    swatches: null,
    position: 'right-end',
    components: {
        palette: false,
        preview: false,
        opacity: true,
        hue: true,

        interaction: {
            hex: false,
            rgba: false,
            hsva: false,
            input: true,
            clear: false,
            save: true
        }
    }
    }));
    pickr.on('init', instance => {
    // console.log('Event: "init"', instance);
    }).on('hide', instance => {
    // console.log('Event: "hide"', instance);
    }).on('show', (color, instance) => {
    // console.log('Event: "show"', color, instance);
    }).on('save', (color, instance) => {
    // console.log('Event: "save"', color, instance);
    }).on('clear', instance => {
    // console.log('Event: "clear"', instance);
    }).on('change', (color, source, instance) => {
    // changeColor(color.toRGBA().toString(), $('.colorText'+i).data('local'));
    }).on('changestop', (source, instance) => {
    // console.log('Event: "changestop"', source, instance);
    }).on('cancel', instance => {
    // console.log('Event: "cancel"', instance);
    }).on('swatchselect', (color, instance) => {
    // console.log('Event: "swatchselect"', color, instance);
    });
    pickers.push(pickr)
}