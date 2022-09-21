import { UniversalPages } from "../components/universal-pages";
import { UniversalPractice } from "../components/universal-practice";
import { UniversalTesting } from "../components/universal-testing";
import { UniversalTheory } from "../components/universal-theory";

export const pagesTesting = (language) => {
    return {
        title: language.testing.testing,
        subtypes: [
            {
                path: "standard", text: language.testing.standard, subText: language.testing.standardText
            },
            {
                path: "simple", text: language.testing.simple, subText: language.testing.simpleText
            },
            {
                path: "context", text: language.testing.context, subText: language.testing.contextText
            },
            {
                path: "multiple", text: language.testing.multiple, subText: language.testing.multipleText
            }
        ]
    };
}

export const routesTesting = (language) => {
    return [
        { path: "/", Component: <UniversalPages content={pagesTesting(language)} /> },
        { path: "/standard", Component: <UniversalTesting /> },
        { path: "/simple", Component: <UniversalTesting /> },
        { path: "/context", Component: <UniversalTesting /> },
        { path: "/multiple", Component: <UniversalTesting /> }
    ];
}

export const pagesPractice = (language) => {
    return {
        title: language.practice.practice,
        subtypes: [
            {
                path: "python", text: language.practice.Python, subText: language.practice.PythonText
            },
            {
                path: "html", text: language.practice.Html, subText: language.practice.HtmlText
            },
            {
                path: "sql", text: language.practice.Sql, subText: language.practice.SqlText
            },
            {
                path: "excel", text: language.practice.Excel, subText: language.practice.ExcelText
            },
            {
                path: "converting", text: language.practice.Converting, subText: language.practice.ConvertingText
            }
        ]
    };
}

export const routesPractice = (language) => {
    return [
        { path: "/", Component: <UniversalPages content={pagesPractice(language)} /> },
        { path: "/python", Component: <UniversalPractice /> },
        { path: "/html", Component: <UniversalPractice /> },
        { path: "/excel", Component: <UniversalPractice /> },
        { path: "/converting", Component: <UniversalPractice /> },
        { path: "/sql", Component: <UniversalPractice /> }
    ];
}
export const pagesTheory = (language) => {
    return {
        title: "Theory",
        subtypes: [
            {
                path: "mix", text: language.theory.mix, subText: language.theory.mix
            },
            {
                path: "mistakes", text: language.theory.mistakes, subText: language.theory.mistakes
            }
        ]
    };
}
export const routesTheory = (language) => {
    return [
        { path: "/", Component: <UniversalPages content={pagesTheory(language)} /> },
        { path: "/mix", Component: <UniversalTheory /> },
        { path: "/mistakes", Component: <UniversalTheory /> }
    ];
} 