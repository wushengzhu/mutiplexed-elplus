import { nextTick } from 'vue'
import { loadCss, loadJs } from './common'
import * as elIcons from '@element-plus/icons-vue'

const cssUrls: Array<string> = [
  '//at.alicdn.com/t/c/font_3846007_gnktnbu3ih4.css' // 阿里图标库cs，每添加一次图标都需要更换
  // '//cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' // font-awesome的css
]
const jsUrls: Array<string> = []
/**
 * 加载预设的字体图标资源
 */
export default function init() {
  if (cssUrls.length > 0) {
    cssUrls.map(v => {
      loadCss(v)
    })
  }

  if (jsUrls.length > 0) {
    jsUrls.map(v => {
      loadJs(v)
    })
  }
}

/**
 * 获取当前页面中从指定域名加载到的样式表内容
 * 样式表未载入前无法获取
 */
function getStylesFromDomain(domain: string) {
  const sheets: any = []
  const styles: StyleSheetList = document.styleSheets
  for (const key in styles) {
    if (styles[key].href && (styles[key].href as string).indexOf(domain) > -1) {
      sheets.push(styles[key])
    }
  }
  return sheets
}

/**
 * 获取本地自带的图标
 * /public/icons文件夹内的svg文件夹
 */
export function getLocalIconfontNames() {
  return new Promise<string[]>((resolve, reject) => {
    nextTick(() => {
      let iconfonts: string[] = []

      const svgEl = document.getElementById('local-icon')
      if (svgEl?.dataset.iconName) {
        iconfonts = (svgEl?.dataset.iconName as string).split(',')
      }

      if (iconfonts.length > 0) {
        resolve(iconfonts)
      } else {
        reject('No Local Icons!')
      }
    })
  })
}

/**
 *
 * @returns element-plus 图标
 */
export function getElementPlusIconfontNames() {
  return new Promise<string[]>((resolve, reject) => {
    nextTick(() => {
      const iconfonts: any = []
      const icons: any = elIcons
      for (const i in icons) {
        iconfonts.push(icons[i].name)
      }
      if (iconfonts.length > 0) {
        resolve(iconfonts)
      } else {
        reject('No ElementPlus Icons')
      }
    })
  })
}

/**
 * 英文官网：https://fontawesome.com/search
 * 中文网：https://fontawesome.com.cn/
 * 版本5.0以下适用
 * @returns font-awesome图标
 */
// export function getAwesomeIconfontName() {
//   init()
//   return new Promise<string[]>((resolve, reject) => {
//     nextTick(() => {
//       const iconfonts: any = []
//       const sheets: any = getStylesFromDomain('cdn.bootcdn.net/ajax/libs/font-awesome/')

//       for (const key in sheets) {
//         const rules: any = sheets[key].cssRules
//         for (const k in rules) {
//           if (rules[k].selectorText && /^\.fa-(.*)::before$/g.test(rules[k].selectorText)) {
//             if (rules[k].selectorText.indexOf(', ') > -1) {
//               const iconNames = rules[k].selectorText.split(', ')
//               /*
//                         // 含图标别名
//                         for (const i_k in iconNames) {
//                             iconfonts.push(`${iconNames[i_k].substring(1, iconNames[i_k].length).replace(/\:\:before/gi, '')}`)
//                         } */
//               iconfonts.push(
//                 `${iconNames[0].substring(1, iconNames[0].length).replace(/\:\:before/gi, '')}`
//               )
//             } else {
//               iconfonts.push(
//                 `${rules[k].selectorText
//                   .substring(1, rules[k].selectorText.length)
//                   .replace(/\:\:before/gi, '')}`
//               )
//             }
//           }
//         }
//       }

//       if (iconfonts.length > 0) {
//         resolve(iconfonts)
//       } else {
//         reject('No AwesomeIcon style sheet')
//       }
//     })
//   })
// }

/**
 * 阿里巴巴图标库，需要先加载图标css文件，
 * @returns iconfont图标名称
 */
export function getIconfontNames() {
  init()
  return new Promise<string[]>((resolve, reject) => {
    nextTick(() => {
      const iconfonts: any = []
      const sheets = getStylesFromDomain('at.alicdn.com')

      for (const key in sheets) {
        const rules: any = sheets[key].cssRules
        for (const k in rules) {
          // .表示匹配除换行符 \n 之外的任何单字符
          // *表示单个字符匹配任意次
          if (rules[k].selectorText && /^\.icon-(.*)::before$/g.test(rules[k].selectorText)) {
            // 去掉样式的.符号以及::before
            iconfonts.push(
              `${rules[k].selectorText
                .substring(1, rules[k].selectorText.length)
                .replace(/\:\:before/gi, '')}`
            )
          }
        }
      }
      if (iconfonts.length > 0) {
        resolve(iconfonts)
      } else {
        reject('No Iconfont style sheet')
      }
    })
  })
}
