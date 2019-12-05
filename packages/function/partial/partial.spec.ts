import Function from "../../type/Function/Function"
import partial from "./partial"



describe("function partial(f, ...applied)", () => {
    context("f is an unary function", () => {
        const f: Function.Unary<number, 0> = (a) => a

        context("applied is one argument", () => {
            const subject = partial(f, 0)

            it("should return the same result as an f function", () => {
                expect(subject())
                    .toEqual(f(0))
            })
        })

        context("placeholder is applied", () => {
            context("applied at 1st position", () => {
                const subject = partial(f, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject(0))
                        .toEqual(f(0))
                })
            })
        })
    })

    context("f is a binary function", () => {
        const f: Function.Binary<number, 0, "1"> = (a, b) => a + parseInt(b, 10)

        context("one argument is applied", () => {
            const subject = partial(f, 0)

            it("should return the same result as an f function", () => {
                expect(subject("1"))
                    .toEqual(f(0, "1"))
            })
        })

        context("two arguments are applied", () => {
            const subject = partial(f, 0, "1")

            it("should return the same result as an f function", () => {
                expect(subject())
                    .toEqual(f(0, "1"))
            })
        })

        context("placeholder is applied", () => {
            context("applied at 1st position", () => {
                const subject = partial(f, undefined, "1")

                it("should return the same result as an f function", () => {
                    expect(subject(0))
                        .toEqual(f(0, "1"))
                })
            })

            context("applied at 2nd position", () => {
                const subject = partial(f, 0, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject("1"))
                        .toEqual(f(0, "1"))
                })
            })

            context("applied at 1st and 2nd position", () => {
                const subject = partial(f, undefined, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject(0, "1"))
                        .toEqual(f(0, "1"))
                })
            })
        })
    })

    context("f is a ternary function", () => {
        const f: Function.Ternary<number, 0, "1", 1> = (a, b, c) => a + parseInt(b, 10) + c

        context("one argument is applied", () => {
            const subject = partial(f, 0)

            it("should return the same result as an f function", () => {
                expect(subject("1", 1))
                    .toEqual(f(0, "1", 1))
            })
        })

        context("two arguments are applied", () => {
            const subject = partial(f, 0, 1)

            it("should return the same result as an f function", () => {
                expect(subject(1))
                    .toEqual(f(0, "1", 1))
            })
        })

        context("three arguments are applied", () => {
            const subject = partial(f, 0, 1, 1)

            it("should return the same result as an f function", () => {
                expect(subject())
                    .toEqual(f(0, "1", 1))
            })
        })

        context("placeholder is applied", () => {
            context("applied at 1st position", () => {
                const subject = partial(f, undefined, "1", 1)

                it("should return the same result as an f function", () => {
                    expect(subject(0))
                        .toEqual(f(0, "1", 1))
                })
            })

            context("applied at 2nd position", () => {
                const subject = partial(f, 0, undefined, 1)

                it("should return the same result as an f function", () => {
                    expect(subject("1"))
                        .toEqual(f(0, "1", 1))
                })
            })

            context("applied at 3rd position", () => {
                const subject = partial(f, 0, "1", undefined)

                it("should return the same result as an f function", () => {
                    expect(subject(1))
                        .toEqual(f(0, "1", 1))
                })
            })

            context("applied at 1st and 2nd position", () => {
                const subject = partial(f, undefined, undefined, 1)

                it("should return the same result as an f function", () => {
                    expect(subject(0, "1"))
                        .toEqual(f(0, "1", 1))
                })
            })

            context("applied at 1st and 3rd position", () => {
                const subject = partial(f, undefined, "1", undefined)

                it("should return the same result as an f function", () => {
                    expect(subject(0, 1))
                        .toEqual(f(0, "1", 1))
                })
            })

            context("applied at 2nd and 3rd position", () => {
                const subject = partial(f, 0, undefined, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject("1", 1))
                        .toEqual(f(0, "1", 1))
                })
            })

            context("applied at 1st, 2nd and 3rd position", () => {
                const subject = partial(f, undefined, undefined, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject(0, "1", 1))
                        .toEqual(f(0, "1", 1))
                })
            })
        })
    })

    context("f is a quaternary function", () => {
        const f: Function.Quaternary<number, 0, "1", 1, 2> = (a, b, c, d) => a + parseInt(b, 10) + c + d

        context("one argument is applied", () => {
            const subject = partial(f, 0)

            it("should return the same result as an f function", () => {
                expect(subject("1", 1, 2))
                    .toEqual(f(0, "1", 1, 2))
            })
        })

        context("two arguments are applied", () => {
            const subject = partial(f, 0, 1)

            it("should return the same result as an f function", () => {
                expect(subject(1, 2))
                    .toEqual(f(0, "1", 1, 2))
            })
        })

        context("three arguments are applied", () => {
            const subject = partial(f, 0, 1, 1)

            it("should return the same result as an f function", () => {
                expect(subject(2))
                    .toEqual(f(0, "1", 1, 2))
            })
        })

        context("four arguments are applied", () => {
            const subject = partial(f, 0, "1", 1, 2)

            it("should return the same result as an f function", () => {
                expect(subject())
                    .toEqual(f(0, "1", 1, 2))
            })
        })

        context("placeholder is applied", () => {
            context("applied at 1st position", () => {
                const subject = partial(f, undefined, "1", 1, 2)

                it("should return the same result as an f function", () => {
                    expect(subject(0))
                        .toEqual(f(0, "1", 1, 2))
                })
            })

            context("applied at 2nd position", () => {
                const subject = partial(f, 0, undefined, 1, 2)

                it("should return the same result as an f function", () => {
                    expect(subject("1"))
                        .toEqual(f(0, "1", 1, 2))
                })
            })

            context("applied at 3rd position", () => {
                const subject = partial(f, 0, "1", undefined, 2)

                it("should return the same result as an f function", () => {
                    expect(subject(1))
                        .toEqual(f(0, "1", 1, 2))
                })
            })

            context("applied at 4th position", () => {
                const subject = partial(f, 0, "1", 1, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject(2))
                        .toEqual(f(0, "1", 1, 2))
                })
            })

            context("applied at 1st and 2nd position", () => {
                const subject = partial(f, undefined, undefined, 1, 2)

                it("should return the same result as an f function", () => {
                    expect(subject(0, "1"))
                        .toEqual(f(0, "1", 1, 2))
                })
            })

            context("applied at 1st and 3rd position", () => {
                const subject = partial(f, undefined, "1", undefined, 2)

                it("should return the same result as an f function", () => {
                    expect(subject(0, 1))
                        .toEqual(f(0, "1", 1, 2))
                })
            })

            context("applied at 1st and 4th position", () => {
                const subject = partial(f, undefined, "1", 1, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject(0, 2))
                        .toEqual(f(0, "1", 1, 2))
                })
            })

            context("applied at 2nd and 3rd position", () => {
                const subject = partial(f, 0, undefined, undefined, 2)

                it("should return the same result as an f function", () => {
                    expect(subject("1", 1))
                        .toEqual(f(0, "1", 1, 2))
                })
            })

            context("applied at 2nd and 4th position", () => {
                const subject = partial(f, 0, undefined, 1, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject("1", 2))
                        .toEqual(f(0, "1", 1, 2))
                })
            })

            context("applied at 3rd and 4th position", () => {
                const subject = partial(f, 0, "1", undefined, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject(1, 2))
                        .toEqual(f(0, "1", 1, 2))
                })
            })

            context("applied at 1st, 2nd and 3rd position", () => {
                const subject = partial(f, undefined, undefined, undefined, 2)

                it("should return the same result as an f function", () => {
                    expect(subject(0, "1", 1))
                        .toEqual(f(0, "1", 1, 2))
                })
            })

            context("applied at 1st, 2nd and 4th position", () => {
                const subject = partial(f, undefined, undefined, 1, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject(0, "1", 2))
                        .toEqual(f(0, "1", 1, 2))
                })
            })

            context("applied at 1st, 3rd and 4th position", () => {
                const subject = partial(f, undefined, "1", undefined, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject(0, 1, 2))
                        .toEqual(f(0, "1", 1, 2))
                })
            })

            context("applied at 2nd, 3rd and 4th position", () => {
                const subject = partial(f, 0, undefined, undefined, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject("1", 1, 2))
                        .toEqual(f(0, "1", 1, 2))
                })
            })

            context("applied at 1st, 2nd, 3rd and 4th position", () => {
                const subject = partial(f, undefined, undefined, undefined, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject(0, "1", 1, 2))
                        .toEqual(f(0, "1", 1, 2))
                })
            })
        })
    })

    context("f is a quinary function", () => {
        const f: Function.Quinary<number, 0, "1", 1, 2, 3> = (a, b, c, d, e) => a + parseInt(b, 10) + c + d + e

        context("one argument is applied", () => {
            const subject = partial(f, 0)

            it("should return the same result as an f function", () => {
                expect(subject("1", 1, 2, 3))
                    .toEqual(f(0, "1", 1, 2, 3))
            })
        })

        context("two arguments are applied", () => {
            const subject = partial(f, 0, 1)

            it("should return the same result as an f function", () => {
                expect(subject(1, 2, 3))
                    .toEqual(f(0, "1", 1, 2, 3))
            })
        })

        context("three arguments are applied", () => {
            const subject = partial(f, 0, 1, 1)

            it("should return the same result as an f function", () => {
                expect(subject(2, 3))
                    .toEqual(f(0, "1", 1, 2, 3))
            })
        })

        context("four arguments are applied", () => {
            const subject = partial(f, 0, 1, 1, 2)

            it("should return the same result as an f function", () => {
                expect(subject(3))
                    .toEqual(f(0, "1", 1, 2, 3))
            })
        })

        context("five arguments are applied", () => {
            const subject = partial(f, 0, 1, 1, 2, 3)

            it("should return the same result as an f function", () => {
                expect(subject())
                    .toEqual(f(0, "1", 1, 2, 3))
            })
        })

        context("placeholder is applied", () => {
            context("applied at 1st position", () => {
                const subject = partial(f, undefined, "1", 1, 2, 3)

                it("should return the same result as an f function", () => {
                    expect(subject(0))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 2nd position", () => {
                const subject = partial(f, 0, undefined, 1, 2, 3)

                it("should return the same result as an f function", () => {
                    expect(subject("1"))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 3rd position", () => {
                const subject = partial(f, 0, "1", undefined, 2, 3)

                it("should return the same result as an f function", () => {
                    expect(subject(1))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 4th position", () => {
                const subject = partial(f, 0, "1", 1, undefined, 3)

                it("should return the same result as an f function", () => {
                    expect(subject(2))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 5th position", () => {
                const subject = partial(f, 0, "1", 1, 2, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject(3))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 1st and 2nd position", () => {
                const subject = partial(f, undefined, undefined, 1, 2, 3)

                it("should return the same result as an f function", () => {
                    expect(subject(0, "1"))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 1st and 3rd position", () => {
                const subject = partial(f, undefined, "1", undefined, 2, 3)

                it("should return the same result as an f function", () => {
                    expect(subject(0, 1))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 1st and 4th position", () => {
                const subject = partial(f, undefined, "1", 1, undefined, 3)

                it("should return the same result as an f function", () => {
                    expect(subject(0, 2))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 1st and 5th position", () => {
                const subject = partial(f, undefined, "1", 1, 2, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject(0, 3))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 2nd and 3rd position", () => {
                const subject = partial(f, 0, undefined, undefined, 2, 3)

                it("should return the same result as an f function", () => {
                    expect(subject("1", 1))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 2nd and 4th position", () => {
                const subject = partial(f, 0, undefined, 1, undefined, 3)

                it("should return the same result as an f function", () => {
                    expect(subject("1", 2))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 2nd and 5th position", () => {
                const subject = partial(f, 0, undefined, 1, 2, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject("1", 3))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 3rd and 4th position", () => {
                const subject = partial(f, 0, "1", undefined, undefined, 3)

                it("should return the same result as an f function", () => {
                    expect(subject(1, 2))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 3rd and 5th position", () => {
                const subject = partial(f, 0, "1", undefined, 2, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject(1, 3))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 4th and 5th position", () => {
                const subject = partial(f, 0, "1", 1, undefined, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject(2, 3))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 1st, 2nd and 3rd position", () => {
                const subject = partial(f, undefined, undefined, undefined, 2, 3)

                it("should return the same result as an f function", () => {
                    expect(subject(0, "1", 1))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 1st, 2nd and 4th position", () => {
                const subject = partial(f, undefined, undefined, 1, undefined, 3)

                it("should return the same result as an f function", () => {
                    expect(subject(0, "1", 2))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 1st, 2nd and 5th position", () => {
                const subject = partial(f, undefined, undefined, 1, 2, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject(0, "1", 3))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 1st, 3rd and 5th position", () => {
                const subject = partial(f, undefined, "1", undefined, 2, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject(0, 1, 3))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 1st, 4th and 5th position", () => {
                const subject = partial(f, undefined, "1", 1, undefined, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject(0, 2, 3))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 2nd, 4th and 5th position", () => {
                const subject = partial(f, 0, undefined, 1, undefined, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject("1", 2, 3))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })

            context("applied at 3rd, 4th and 5th position", () => {
                const subject = partial(f, 0, "1", undefined, undefined, undefined)

                it("should return the same result as an f function", () => {
                    expect(subject(1, 2, 3))
                        .toEqual(f(0, "1", 1, 2, 3))
                })
            })
        })
    })
})
