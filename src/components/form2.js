import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import React from "react";

const schema = yup.object().shape({
    citySender: yup.string().required(),
    cityReceiver: yup.string().required(),
    package: yup.string().required(),
    amount: yup.number().required().positive(),
    price: yup.number().required().positive(),
    weight: yup.number().required().positive(),
    length: yup.number().required().positive(),
    width: yup.number().required().positive(),
    height: yup.number().positive().required(),
    floorAmount: yup.number().positive(),
});

export function Form2(props) {

    const {register, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    const cities = [
        {
            id: 1,
            text: 'Житомир',
        },
        {
            id: 2,
            text: 'Київ',
        },
        {
            id: 3,
            text: 'Вінниця',
        },
        {
            id: 4,
            text: 'Біла Церква',
        },
        {
            id: 5,
            text: 'Хмельницький',
        },
        {
            id: 6,
            text: 'Миколаїв',
        },
        {
            id: 1,
            text: 'Львів',
        },
    ];
    const packages = [
        {
            id: 1,
            text: 'Вантажі',
        },
        {
            id: 2,
            text: 'Палети',
        },
    ];

    function handleInput(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        );
    }

    function handleOnSubmit(event) {
        console.log("amogus");
        event.preventDefault();
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="container">
                <div className="label_main"><label>Маршрут</label></div>
                <div className="container1">
                    <div><label>Місто-відправник</label></div>
                    <div><select name="citySender" className="city_input" required>
                        {cities.map(
                            (item) =>
                                <option key={item.id.toString()} value={item.id.toString()}>{item.text}</option>
                        )}
                    </select></div>
                </div>
                <div className="container1">
                    <div><label>Місто-одержувач</label></div>
                    <div><select name="cityReceiver" className="city_input" required>
                        {cities.map(
                            (it) =>
                                <option key={it.id.toString()} value={it.id.toString()}>{it.text}</option>
                        )}
                    </select></div>
                </div>
            </div>
            <hr/>
            <div className="container">
                <div className="label_main"><label>Вид відправлення</label></div>
                <select name="package" required>
                    {packages.map(
                        (item) =>
                            <option key={item.id.toString()} value={item.id.toString()}>{item.text}</option>
                    )}
                </select>
            </div>
            <hr/>
            <div>
                <label>Характеристика місць</label>
                <div className="container">
                    <div className="container1">
                        <div><label>Кількість</label></div>
                        <div>
                            <input {...register("amount")} type="number" className="places" name="amount" required/>
                            <p>{errors.amount?.message}</p>
                        </div>
                    </div>
                    <div className="container1">
                        <div className="places1"><label>Оголошена вартість</label></div>
                        <div>
                            <input {...register("price")} type="text" className="places" name="price" required/>
                            <p>{errors.price?.message}</p>
                        </div>
                    </div>
                    <div className="places">ГРН</div>
                    <div className="container1">
                        <div><label>Вага</label></div>
                        <div>
                            <input {...register("weight")} type="text" className="places" name="weight" required/>
                            <p>{errors.weight?.message}</p>
                        </div>
                    </div>
                    <div className="places">КГ</div>
                    <div className="container1">
                        <div><label>Довжина</label></div>
                        <div>
                            <input {...register("length")} type="text" className="places" name="length" required/>
                            <p>{errors.length?.message}</p>
                        </div>
                    </div>
                    <div className="container1">
                        <div><label>Ширина</label></div>
                        <div>
                            <input {...register("width")} type="text" className="places" name="width" required/>
                            <p>{errors.width?.message}</p>
                        </div>
                    </div>
                    <div className="container1">
                        <div><label>Висота</label></div>
                        <div>
                            <input {...register("height")} type="text" className="places" name="height" required/>
                            <p>{errors.height?.message}</p>
                        </div>
                    </div>
                    <div>СМ</div>
                </div>
                <div>Додати місце</div>
            </div>
            <hr/>
            <div className="container">
                <div className="label_main"><label>Послуга "Пакування"</label></div>
                <input type="checkbox"/>
                <a href="https://novaposhta.ua/uploads/misc/doc/Dodatkovi_poslygi.pdf">Тарифи пакування</a>
            </div>
            <div className="container">
                <div className="label_main"><label>Послуга "Підйом на поверх"</label></div>
                <input {...register("floorAmount")} type="text" name="floorAmount" className="input_floor"/>
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
                <input type="reset" value="Очистити"/>
            </div>
        </form>
    );
}