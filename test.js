let id = '87020501'

if (!(/^870202\d{2}$/.test(id)) && !/^870205\d{2}$/.test(id)) { // 富民定期单独交易明细不展示
   console.log('dd')
}