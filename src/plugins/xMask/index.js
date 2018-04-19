import maskComponent from './index.vue'

const Mask = {}

Mask.install = function(Vue,options){
    if(Mask.installed){
        return;
    }
    const tpl = Vue.extend(maskComponent)
    const maskComp = new tpl()

    document.body.appendChild(maskComp.$mount().$el)
    maskComp.showmask = false

    const showMaskFn = function(opt){
        maskComp.showmask = true
        document.querySelector('body').style.overflow = "hidden"
        if(opt){
            maskComp.closeEvent = opt.closeEvent || false
        }
    }
    const closeMaskFn = function(){
        maskComp.showmask = false
        document.querySelector('body').style.overflow = "auto"
    }

    Vue.prototype.$showMask = showMaskFn
    Vue.prototype.$closeMask = closeMaskFn

}

export default Mask