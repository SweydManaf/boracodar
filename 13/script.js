IMask(document.querySelector("#cc-cvv"), {
  mask: "0000",
})

IMask(document.querySelector("#cc-number"), {
  mask: "0000 0000 0000 0000",
})

IMask(document.querySelector("#cc-validty"), {
  mask: "MM{/}YY",
  blocks: {
    MM: {
      mask: iMask.MaskedRange,
      from: 1,
      to: 12,
    },
    YY: {
      mask: iMask.MaskedRange,
      from: String(new Date().getFullYear() - 10).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
  },
})
