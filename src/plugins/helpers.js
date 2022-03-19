// outside of a Vue file
import { Dialog, Notify } from 'quasar'
import { useStore } from 'vuex'

export default {
  chunk (arr, size = 2) {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i++) {
      const last = chunkedArray[chunkedArray.length - 1];
      if (!last || last.length === size) {
        chunkedArray.push([arr[i]]);
      } else {
        last.push(arr[i]);
      }
    };
    return chunkedArray;
  },
  ajaxData(path){
    return{
      processing: true,
      serverSide: true,
      ajax: {
                crossDomain: true,
                url: process.env.baseURL+'/'+path,
                method: 'GET',
                headers:  {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }
          }
  },
  notify (msg, status = 'info', alert = false) {
    let type = {
      success: 'positive',
      error: 'negative',
      danger: 'negative',
      warning: 'warning',
      alert: 'warning',
      notice: 'ongoing',
      info: 'info',
    }

    if (alert === true) {
      Dialog.create({
        class: `bg-${type[status]} text-white`,
        ok: { color: 'white', 'text-color': type[status] },
        title: this.stringJs(status).upper(1).$,
        message: msg
      })
    } else {
      Notify.create({
        type: type[status] || status,
        message: msg
      })
    }
  },
  vuexed (index, key) {
    const data = JSON.parse(localStorage.getItem('vuex') || '{}');
    if (index) {
      if (key && data[index]) {
        return data[index][key] || null;
      }
      return data[index] || null;
    }
    return data;
  },
  nlText (str, lines = 2, breaker = '<br />') {
    const splitext = this.chunk(str.split(' '), lines);
    let text = '';
    splitext.forEach(el => {
      text += el.join(' ') + breaker
    })

    return text;
  },
  goto (link) {
    window.location = link
  },
  asset (url) {
    if (process.env.PREFER_ASSET === 'true' && url.indexOf('http') !== -1) {
      var base_url = document.createElement('a');
      base_url.href = url
      url = base_url.pathname.replace(/^\/|\/$/g, '');
    }
    return process.env.ASSET_URL + url;
  },
  nameFromPath (path) {
    var base_url = document.createElement('a');
    base_url.href = path
    return base_url.pathname.replace(/\/|\.|\/$/g, '');
  },
  arrayClean (array, getObj = false) {
    let obj = JSON.parse(JSON.stringify(array));

    if (getObj === true) {
      return obj
    }
    return Object.keys(obj)
      .map(i => obj[i]);
  },
  objMap (obj, func) {
    obj = JSON.parse(JSON.stringify(obj));
    let newObj = {}
    Object.keys(obj).map((key) => {
      newObj[key] = func(obj, key);
    });
    return newObj;
  },
  isEven (n) {
    if (!Number.isFinite(parseFloat(n))) return false
    return n % 2 == 0;
  },
  isOdd (n) {
    if (!Number.isFinite(parseFloat(n))) return false
    return Math.abs(n % 2) == 1;
  },
  money (amount, abbrev = false, curr = true) {
    if (amount === null) return null;
    const gs = useStore().getters.siteSettings
    let currency = "USD", symbol = "$";
    if (gs && gs.settings && gs.settings.currency) {
      currency = gs.settings.currency
    }
    if (gs && gs.settings && gs.settings.currency_symbol) {
      symbol = gs.settings.currency_symbol
    }

    return (curr === true
      ? symbol
      : (curr === "code" ? currency : '')
    ) + (abbrev === true ? this.intStr(amount) : amount);
  },
  humanize (num, slugify) {
    if (!num) {
      return false;
    }

    if (slugify && (slugify === '-' || slugify === '_')) {
      return this.humanize(num).replace(' ', slugify).toLowerCase()
    }
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
      'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
      'ninety'];

    var numString = num.toString();

    if (num < 0) throw new Error('Negative numbers are not supported.');

    if (num === 0) return 'zero';

    //the case of 1 - 20
    if (num < 20) {
      return ones[num];
    }

    if (numString.length === 2) {
      return tens[numString[0]] + ' ' + ones[numString[1]];
    }

    //100 and more
    if (numString.length == 3) {
      if (numString[1] === '0' && numString[2] === '0')
        return ones[numString[0]] + ' hundred';
      else
        return ones[numString[0]] + ' hundred and ' + this.humanize(+(numString[1] + numString[2]), slugify);
    }

    if (numString.length === 4) {
      var end = +(numString[1] + numString[2] + numString[3]);
      if (end === 0) return ones[numString[0]] + ' thousand';
      if (end < 100) return ones[numString[0]] + ' thousand and ' + this.humanize(end, slugify);
      return ones[numString[0]] + ' thousand ' + this.humanize(end, slugify);
    }
  },
  intStr (num) {
    num = num.toString().replace(/[^0-9.]/g, '');
    if (num < 1000) {
      return num;
    }
    let si = [
      { v: 1E3, s: "K" },
      { v: 1E6, s: "M" },
      { v: 1E9, s: "B" },
      { v: 1E12, s: "T" },
      { v: 1E15, s: "P" },
      { v: 1E18, s: "E" }
    ];
    let index;
    for (index = si.length - 1; index > 0; index--) {
      if (num >= si[index].v) {
        break;
      }
    }
    return (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s;
  },
}