import { UniversalPages } from "../components/universals/universal-pages";
import { UniversalPractice } from "../components/universals/universal-practice";
import { UniversalTesting } from "../components/universals/universal-testing";
import { UniversalTheory } from "../components/universals/universal-theory";
import { context, converting, excel, html, multiple, python, simple, sql, standard, theory } from "../media";

export const getPages = (type, language) => {
    if (type === 'testing') {
        return {
            title: language.testing.testing,
            subtypes: [
                {
                    path: "standard", text: language.testing.standard, subText: language.testing.standardText, src: standard
                },
                {
                    path: "simple", text: language.testing.simple, subText: language.testing.simpleText, src: simple
                },
                {
                    path: "context", text: language.testing.context, subText: language.testing.contextText, src: context
                },
                {
                    path: "multiple", text: language.testing.multiple, subText: language.testing.multipleText, src: multiple
                }
            ]
        };
    }
    if (type === 'practice') {
        return {
            title: language.practice.practice,
            subtypes: [
                {
                    path: "python", text: language.practice.Python, subText: language.practice.PythonText, src: python
                },
                {
                    path: "html", text: language.practice.Html, subText: language.practice.HtmlText, src: html
                },
                {
                    path: "sql", text: language.practice.Sql, subText: language.practice.SqlText, src: sql
                },
                {
                    path: "excel", text: language.practice.Excel, subText: language.practice.ExcelText, src: excel
                },
                {
                    path: "converting", text: language.practice.Converting, subText: language.practice.ConvertingText, src: converting
                }
            ]
        };
    }
    if (type === 'theory') {
        return {
            title: "Theory",
            subtypes: [
                {
                    path: "mix", text: language.theory.mix, subText: language.theory.mix, src: theory
                },
                {
                    path: "mistakes", text: language.theory.mistakes, subText: language.theory.mistakes, src: theory
                }
            ]
        };
    }
    return null;
}

export const getRoutes = (type, language) => {
    if (type === 'testing') {
        return [
            { path: "", Component: <UniversalPages content={getPages('testing', language)} /> },
            { path: "standard", Component: <UniversalTesting /> },
            { path: "simple", Component: <UniversalTesting /> },
            { path: "context", Component: <UniversalTesting /> },
            { path: "multiple", Component: <UniversalTesting /> }
        ];
    }
    if (type === 'practice') {
        return [
            { path: "", Component: <UniversalPages content={getPages('practice', language)} /> },
            { path: "python", Component: <UniversalPractice /> },
            { path: "html", Component: <UniversalPractice /> },
            { path: "excel", Component: <UniversalPractice /> },
            { path: "converting", Component: <UniversalPractice /> },
            { path: "sql", Component: <UniversalPractice /> }
        ];
    }
    if (type === 'theory') {
        return [
            { path: "", Component: <UniversalPages content={getPages('theory', language)} /> },
            { path: "mix", Component: <UniversalTheory /> },
            { path: "mistakes", Component: <UniversalTheory /> }
        ];
    }
    return null;
}