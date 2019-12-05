import Function from "../../type/Function/Function"
import curry from "./curry"



describe("function curry(f)", () => {
    context("f is an unary function", () => {
        const f: Function.Unary<number, 0> = (a) => a

        context("is not curried", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(0))
                    .toEqual(f(0))
            })

            context("placeholder is applied", () => {
                context("applied at 1st position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(undefined)(0))
                            .toEqual(f(0))
                    })
                })
            })
        })
    })

    context("f is a binary function", () => {
        const f: Function.Binary<number, 0, "1"> = (a, b) => a + parseInt(b, 10)

        context("is not curried", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(0, "1"))
                    .toEqual(f(0, "1"))
            })

            context("placeholder is applied", () => {
                context("applied at 1st position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(undefined, "1")(0))
                            .toEqual(f(0, "1"))
                    })
                })

                context("applied at 2nd position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(0, undefined)("1"))
                            .toEqual(f(0, "1"))
                    })
                })
            })
        })

        context("is curried once", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(0)("1"))
                    .toEqual(f(0, "1"))
            })

            context("placeholder is applied", () => {
                context("applied at 1st position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(undefined)(0)("1"))
                            .toEqual(f(0, "1"))
                    })
                })

                context("applied at 2nd position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(0)(undefined)("1"))
                            .toEqual(f(0, "1"))
                    })
                })
            })
        })
    })

    context("f is a ternary function", () => {
        const f: Function.Ternary<number, 0, "1", 1> = (a, b, c) => a + parseInt(b, 10) + c

        context("is not curried", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(0, "1", 1))
                    .toEqual(f(0, "1", 1))
            })

            context("placeholder is applied", () => {
                context("applied at 1st position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(undefined, "1", 1)(0))
                            .toEqual(f(0, "1", 1))
                    })
                })

                context("applied at 2nd position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(0, undefined, 1)("1"))
                            .toEqual(f(0, "1", 1))
                    })
                })

                context("applied at 3rd position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(0, "1", undefined)(1))
                            .toEqual(f(0, "1", 1))
                    })
                })
            })
        })

        context("is curried once", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(0)("1", 1))
                    .toEqual(f(0, "1", 1))
                expect(subject(0, "1")(1))
                    .toEqual(f(0, "1", 1))
            })

            context("placeholder is applied", () => {
                context("applied at 1st position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(undefined)(0, "1")(1))
                            .toEqual(f(0, "1", 1))
                        expect(subject(undefined, "1")(0)(1))
                            .toEqual(f(0, "1", 1))
                    })
                })

                context("applied at 2nd position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(0)(undefined, 1)("1"))
                            .toEqual(f(0, "1", 1))
                        expect(subject(0, undefined)("1")(1))
                            .toEqual(f(0, "1", 1))
                    })
                })

                context("applied at 3rd position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(0)("1", undefined)(1))
                            .toEqual(f(0, "1", 1))
                        expect(subject(0, "1")(undefined)(1))
                            .toEqual(f(0, "1", 1))
                    })
                })
            })
        })

        context("is curried twice", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(0)("1")(1))
                    .toEqual(f(0, "1", 1))
            })

            context("placeholder is applied", () => {
                context("applied at 1st position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(undefined)(0)("1")(1))
                            .toEqual(f(0, "1", 1))
                    })
                })

                context("applied at 2nd position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(0)(undefined)("1")(1))
                            .toEqual(f(0, "1", 1))
                    })
                })

                context("applied at 3rd position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(0)("1")(undefined)(1))
                            .toEqual(f(0, "1", 1))
                    })
                })
            })
        })
    })

    context("f is a quaternary function", () => {
        const f: Function.Quaternary<number, 0, "1", 1, 2> = (a, b, c, d) => a + parseInt(b, 10) + c + d

        context("is not curried", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(0, "1", 1, 2))
                    .toEqual(f(0, "1", 1, 2))
            })

            context("placeholder is applied", () => {
                context("applied at 1st position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(undefined, "1", 1, 2)(0))
                            .toEqual(f(0, "1", 1, 2))
                    })
                })

                context("applied at 2nd position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(0, undefined, 1, 2)("1"))
                            .toEqual(f(0, "1", 1, 2))
                    })
                })

                context("applied at 3rd position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(0, "1", undefined, 2)(1))
                            .toEqual(f(0, "1", 1, 2))
                    })
                })

                context("applied at 4th position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(0, "1", 1, undefined)(2))
                            .toEqual(f(0, "1", 1, 2))
                    })
                })
            })
        })

        context("is curried once", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(0)("1", 1, 2))
                    .toEqual(f(0, "1", 1, 2))
                expect(subject(0, "1")(1, 2))
                    .toEqual(f(0, "1", 1, 2))
                expect(subject(0, "1", 1)(2))
                    .toEqual(f(0, "1", 1, 2))
            })

            context("placeholder is applied", () => {
                context("applied at 1st position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(undefined)(0, "1", 1)(2))
                            .toEqual(f(0, "1", 1, 2))
                        expect(subject(undefined, "1")(0, 1)(2))
                            .toEqual(f(0, "1", 1, 2))
                        expect(subject(undefined, "1", 1)(0)(2))
                            .toEqual(f(0, "1", 1, 2))
                    })
                })

                context("applied at 2nd position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(0)(undefined, 1, 2)("1"))
                            .toEqual(f(0, "1", 1, 2))
                        expect(subject(0, undefined)("1", 1)(2))
                            .toEqual(f(0, "1", 1, 2))
                        expect(subject(0, undefined, 1)("1")(2))
                            .toEqual(f(0, "1", 1, 2))
                    })
                })

                context("applied at 3rd position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(0)("1", undefined, 2)(1))
                            .toEqual(f(0, "1", 1, 2))
                        expect(subject(0, "1")(undefined, 2)(1))
                            .toEqual(f(0, "1", 1, 2))
                        expect(subject(0, "1", undefined)(1)(2))
                            .toEqual(f(0, "1", 1, 2))
                    })
                })

                context("applied at 4th position", () => {
                    it("should return the same result as an f function", () => {
                        expect(subject(0)("1", 1, undefined)(2))
                            .toEqual(f(0, "1", 1, 2))
                        expect(subject(0, "1")(1, undefined)(2))
                            .toEqual(f(0, "1", 1, 2))
                        expect(subject(0, "1", 1)(undefined)(2))
                            .toEqual(f(0, "1", 1, 2))
                    })
                })
            })

        })

        context("is curried twice", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(0, "1")(1)(2))
                    .toEqual(f(0, "1", 1, 2))
                expect(subject(0)("1", 1)(2))
                    .toEqual(f(0, "1", 1, 2))
                expect(subject(0)("1")(1, 2))
                    .toEqual(f(0, "1", 1, 2))
            })
        })

        context("is curried thrice", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(0)("1")(1)(2))
                    .toEqual(f(0, "1", 1, 2))
            })
        })
    })

    context("f is a quinary function", () => {
        const f: Function.Quinary<number, 0, "1", 1, 2, 3> = (a, b, c, d, e) => a + parseInt(b, 10) + c + d + e

        context("is not curried", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(0, "1", 1, 2, 3))
                    .toEqual(f(0, "1", 1, 2, 3))
            })
        })

        context("is curried once", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(0)("1", 1, 2, 3))
                    .toEqual(f(0, "1", 1, 2, 3))
                expect(subject(0, "1")(1, 2, 3))
                    .toEqual(f(0, "1", 1, 2, 3))
                expect(subject(0, "1", 1)(2, 3))
                    .toEqual(f(0, "1", 1, 2, 3))
                expect(subject(0, "1", 1, 2)(3))
                    .toEqual(f(0, "1", 1, 2, 3))
            })
        })

        context("is curried twice", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(0, "1", 1)(2)(3))
                    .toEqual(f(0, "1", 1, 2, 3))
                expect(subject(0, "1")(1, 2)(3))
                    .toEqual(f(0, "1", 1, 2, 3))
                expect(subject(0)("1", 1)(2, 3))
                    .toEqual(f(0, "1", 1, 2, 3))
                expect(subject(0)("1")(1, 2, 3))
                    .toEqual(f(0, "1", 1, 2, 3))
            })
        })

        context("is curried thrice", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(0, "1")(1)(2)(3))
                    .toEqual(f(0, "1", 1, 2, 3))
                expect(subject(0)("1", 1)(2)(3))
                    .toEqual(f(0, "1", 1, 2, 3))
                expect(subject(0)("1")(1, 2)(3))
                    .toEqual(f(0, "1", 1, 2, 3))
                expect(subject(0)("1")(1)(2, 3))
                    .toEqual(f(0, "1", 1, 2, 3))
            })
        })

        context("is curried frice", () => {
            const subject = curry(f)

            it("should return the same result as an f function", () => {
                expect(subject(0)("1")(1)(2)(3))
                    .toEqual(f(0, "1", 1, 2, 3))
            })
        })
    })
})
