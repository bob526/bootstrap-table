/**
 * Bootstrap Table Persian translation
 * Author: MJ Vakili <mjv.1989@Gmail.com>
 */
($ => {
  $.fn.bootstrapTable.locales['fa-IR'] = {
    formatLoadingMessage () {
      return 'در حال بارگذاری, لطفا صبر کنید...'
    },
    formatRecordsPerPage (pageNumber) {
      return `${pageNumber} رکورد در صفحه`
    },
    formatShowingRows (pageFrom, pageTo, totalRows) {
      return `نمایش ${pageFrom} تا ${pageTo} از ${totalRows} ردیف`
    },
    formatSearch () {
      return 'جستجو'
    },
    formatNoMatches () {
      return 'رکوردی یافت نشد.'
    },
    formatPaginationSwitch () {
      return 'نمایش/مخفی صفحه بندی'
    },
    formatRefresh () {
      return 'به روز رسانی'
    },
    formatToggle () {
      return 'تغییر نمایش'
    },
    formatColumns () {
      return 'سطر ها'
    },
    formatAllRows () {
      return 'همه'
    }
  }

  $.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['fa-IR'])
})(jQuery)