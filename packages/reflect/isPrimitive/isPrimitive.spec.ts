import isPrimitive from "./isPrimitive"



describe(`function isPrimitive(x)`, () => {
    context(`x is a primitive`, () => {
        context(`x is a nil`, () => {
            context(`x is an undefined`, () => {
                it(`should return true`, () => {
                    expect(isPrimitive(undefined))
                        .toBe(true)
                })
            })

            context(`x is a null`, () => {
                it(`should return true`, () => {
                    expect(isPrimitive(null))
                        .toBe(true)
                })
            })
        })

        context(`x is a boolean`, () => {
            context(`x is constructed through a literal`, () => {
                context(`x is a true`, () => {
                    it(`should return true`, () => {
                        expect(isPrimitive(true))
                            .toBe(true)
                    })
                })

                context(`x is a false`, () => {
                    it(`should return true`, () => {
                        expect(isPrimitive(false))
                            .toBe(true)
                    })
                })
            })

            context(`x is constructed through a constructor function`, () => {
                context(`with a new keyword`, () => {
                    context(`x is a true`, () => {
                        it(`should return true`, () => {
                            expect(isPrimitive(new Boolean("true")))
                                .toBe(true)
                        })
                    })

                    context(`x is a false`, () => {
                        it(`should return true`, () => {
                            expect(isPrimitive(new Boolean("false")))
                                .toBe(true)
                        })
                    })
                })

                context(`with a function call`, () => {
                    context(`x is a true`, () => {
                        it(`should return true`, () => {
                            expect(isPrimitive(Boolean("true")))
                                .toBe(true)
                        })
                    })

                    context(`x is a false`, () => {
                        it(`should return true`, () => {
                            expect(isPrimitive(Boolean("false")))
                                .toBe(true)
                        })
                    })
                })
            })
        })

        context(`x is a number`, () => {
            context(`x is a number 0`, () => {
                it(`should return true`, () => {
                    expect(isPrimitive(0))
                        .toBe(true)
                })
            })

            context(`x is a NaN`, () => {
                it(`should return true`, () => {
                    expect(isPrimitive(NaN))
                        .toBe(true)
                })
            })

            context(`x is an Infinity`, () => {
                it(`should return true`, () => {
                    expect(isPrimitive(Infinity))
                        .toBe(true)
                })
            })

            context(`x is constructed through a constructor function`, () => {
                context(`with a new keyword`, () => {
                    it(`should return true`, () => {
                        expect(isPrimitive(new Number(0)))
                            .toBe(true)
                    })
                })

                context(`with a function call`, () => {
                    it(`should return true`, () => {
                        expect(isPrimitive(Number(0)))
                            .toBe(true)
                    })
                })
            })
        })

        context(`x is a string`, () => {
            context(`x is constructed from a literal`, () => {
                it(`should return true`, () => {
                    expect(isPrimitive(""))
                        .toBe(true)
                })
            })

            context(`x is constructed from a constructor`, () => {
                context(`with a new keyword`, () => {
                    it(`should return true`, () => {
                        expect(isPrimitive(new String()))
                            .toBe(true)
                    })
                })

                context(`with a function call`, () => {
                    it(`should return true`, () => {
                        expect(isPrimitive(String()))
                            .toBe(true)
                    })
                })
            })
        })

        context(`x is a symbol`, () => {
            it(`should return true`, () => {
                expect(isPrimitive(Symbol()))
                    .toBe(true)
            })
        })
    })
})
