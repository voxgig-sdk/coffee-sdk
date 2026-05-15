package core

type CoffeeError struct {
	IsCoffeeError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCoffeeError(code string, msg string, ctx *Context) *CoffeeError {
	return &CoffeeError{
		IsCoffeeError: true,
		Sdk:              "Coffee",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CoffeeError) Error() string {
	return e.Msg
}
