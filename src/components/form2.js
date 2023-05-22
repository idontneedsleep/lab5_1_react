/*import { useForm } from "react-hook-form";
import * as yup from "yup";*/
import React from "react";

export function Form2(props) {
    /*const { register, handleSubmit, formState: { errors }, reset } = useForm();
    /*cot schema = yup.object().shape({
        email: yup.string().email().required(),
    });*/
        const cities = [
            {
                id : 1,
                text : 'Житомир',
            },
            {
                id : 2,
                text : 'Київ',
            },
            {
                id : 3,
                text : 'Вінниця',
            },
            {
                id : 4,
                text : 'Біла Церква',
            },
            {
                id : 5,
                text : 'Хмельницький',
            },
            {
                id : 6,
                text : 'Миколаїв',
            },
            {
                id : 1,
                text : 'Львів',
            },
        ];
        const packages = [
            {
                id : 1,
                text : 'Вантажі',
            },
            {
                id : 2,
                text : 'Палети',
            },
        ]
        /*this.handleInput=this.handleInput.bind(this);
        this.handleOnSubmit=this.handleOnSubmit.bind(this);*/

    function handleInput (event)
    {
        this.setState(
            {[event.target.name] : event.target.value}
        );
    }
    function handleOnSubmit (event)
    {
        console.log("amogus");
        event.preventDefault();
    }
        return (
            <form onSubmit={handleOnSubmit}>
                <div className="container">
                    <div className="label_main"><label>Маршрут</label></div>
                    <div className="container">
                        <div className="container1">
                            <div><label>Місто-відправник</label></div>
                            <div><select name="citySender" className="city_input">
                                {cities.map(
                                    (item) =>
                                        <option key={item.id.toString()} value={item.id.toString()}>{item.text}</option>
                                )}
                            </select></div>
                        </div>
                        <div className="container1">
                            <div><label>Місто-одержувач</label></div>
                            <div><select name="cityReceiver" className="city_input">
                                {cities.map(
                                    (it) =>
                                        <option key={it.id.toString()} value={it.id.toString()}>{it.text}</option>
                                )}
                            </select></div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="container">
                    <div className="label_main"><label>Вид відправлення</label></div>
                    <select name="package">
                        {packages.map(
                            (item) =>
                                <option key={item.id.toString()} value={item.id.toString()}>{item.text}</option>
                        )}
                    </select>
                </div>
                <hr/>
                <div>
                    <label>Характеристика місць</label>
                    <div class="container">
                        <div className="container1">
                            <div><label>Кількість</label></div>
                            <div><input type="number" className="places"/></div>
                        </div>
                        <div className="container1">
                            <div className="places1"><label>Оголошена вартість</label></div>
                            <div><input type="text" className="places"/></div>
                        </div>
                        <div className="places">ГРН</div>
                        <div className="container1">
                            <div><label>Вага</label></div>
                            <div><input type="text" className="places"/></div>
                        </div>
                        <div className="places">КГ</div>
                        <div className="container1">
                            <div><label>Довжина</label></div>
                            <div><input type="text" className="places"/></div>
                        </div>
                        <div className="container1">
                            <div><label>Ширина</label></div>
                            <div><input type="text" className="places"/></div>
                        </div>
                        <div className="container1">
                            <div><label>Висота</label></div>
                            <div><input type="text" className="places"/></div>
                        </div>
                        <div>СМ</div>
                    </div>
                </div>
                <hr/>
                <div className="container">
                    <div className="label_main"><label>Послуга "Пакування"</label></div>
                    <input type="checkbox"/>
                    <a>Тарифи пакування</a>
                </div>
                <div className="container">
                    <div className="label_main"><label>Послуга "Підйом на поверх"</label></div>
                    <input type="text" name="floorAmount"/>
                    <div>кількість поверхів</div>
                    <div><label>Ліфт</label></div>
                    <input type="checkbox"/>
                </div>
                <div className="container">
                    <div className="label_main"><label>Послуга "Зворотна доставка"</label></div>
                    <input type="checkbox"/>
                </div>
                <div className="buttons">
                    <input type="submit" value="Розрахувати вартість"/>
                    <input type="reset" value="reset"/>
                </div>
            </form>
        );
}