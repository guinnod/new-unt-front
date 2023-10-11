import { UniversalPages } from "../pages/universals/universal-pages";
import { UniversalPractice } from "../pages/universals/universal-practice";
import { UniversalTesting } from "../pages/universals/universal-testing";
import { UniversalTheory } from "../pages/universals/universal-theory";
import {
    context,
    converting,
    excel,
    html,
    multiple,
    python,
    simple,
    sql,
    standard,
    theory,
} from "../media";
import { message } from "antd";
import { useSelector } from "react-redux";

export const GetPages = (type, language) => {
    const messages = useSelector((state) => state.language.value.messages);
    const notifyProcess = () => {
        message.info(messages.onProcess);
    };
    if (type === "testing") {
        return {
            title: language.testing.testing,
            subtypes: [
                {
                    path: "standard",
                    text: language.testing.standard,
                    subText: language.testing.standardText,
                    src: standard,
                },
                {
                    path: "simple",
                    text: language.testing.simple,
                    subText: language.testing.simpleText,
                    src: simple,
                    onClick: notifyProcess,
                },
                {
                    path: "context",
                    text: language.testing.context,
                    subText: language.testing.contextText,
                    src: context,
                    onClick: notifyProcess,
                },
                {
                    path: "multiple",
                    text: language.testing.multiple,
                    subText: language.testing.multipleText,
                    src: multiple,
                    onClick: notifyProcess,
                },
            ],
        };
    }
    if (type === "practice") {
        return {
            title: language.practice.practice,
            subtypes: [
                {
                    path: "python",
                    text: language.practice.Python,
                    subText: language.practice.PythonText,
                    src: python,
                    link: "https://www.programiz.com/python-programming/online-compiler/",
                },
                {
                    path: "converting",
                    text: language.practice.Converting,
                    subText: language.practice.ConvertingText,
                    src: converting,
                    link: "https://jalu.ch/coding/base_converter.php",
                },
                {
                    path: "html",
                    text: language.practice.Html,
                    subText: language.practice.HtmlText,
                    src: html,
                    link: "https://www.jdoodle.com/html-css-javascript-online-editor/",
                    onClick: notifyProcess,
                },
                {
                    path: "sql",
                    text: language.practice.Sql,
                    subText: language.practice.SqlText,
                    src: sql,
                    link: "https://www.programiz.com/sql/online-compiler/",
                    onClick: notifyProcess,
                },
                {
                    path: "excel",
                    text: language.practice.Excel,
                    subText: language.practice.ExcelText,
                    src: excel,
                    link: "",
                    onClick: notifyProcess,
                },
            ],
        };
    }
    if (type === "theory") {
        return {
            title: "Theory",
            subtypes: [
                {
                    path: "mix",
                    text: language.theory.termins,
                    subText: language.theory.termins,
                    src: theory,
                },
                {
                    path: "python",
                    text: "Python",
                    subText: "Python",
                    src: theory,
                    onClick: notifyProcess,
                },
                {
                    path: "html",
                    text: "Html",
                    subText: "Html",
                    src: theory,
                    onClick: notifyProcess,
                },
            ],
        };
    }
    return null;
};

export const getRoutes = (type, language) => {
    const routes = [];
    const pages = GetPages(type, language);
    routes.push({ path: "", Component: <UniversalPages content={pages} /> });
    const data = pages.subtypes;
    for (let i = 0; i < data.length; i++) {
        routes.push({
            path: data[i].path,
            Component:
                type === "testing" ? (
                    <UniversalTesting />
                ) : type === "practice" ? (
                    <UniversalPractice link={data[i].link} />
                ) : type === "theory" ? (
                    <UniversalTheory />
                ) : (
                    <></>
                ),
        });
    }

    return routes;
};
