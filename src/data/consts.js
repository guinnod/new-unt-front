import { UniversalPages } from "../pages/universals/universal-pages";
import { UniversalPractice } from "../pages/universals/universal-practice";
import { UniversalTesting } from "../pages/universals/universal-testing";
import { UniversalTheory } from "../pages/universals/universal-theory";
import { context, converting, excel, html, multiple, python, simple, sql, standard, theory } from "../media";

export const getPages = (type, language) => {
    if (type === 'testing') {
        return {
            title: language.testing.testing,
            subtypes: [
                {
                    path: "standard", text: language.testing.standard,
                    subText: language.testing.standardText, src: standard
                },
                {
                    path: "simple", text: language.testing.simple,
                    subText: language.testing.simpleText, src: simple
                },
                {
                    path: "context", text: language.testing.context,
                    subText: language.testing.contextText, src: context
                },
                {
                    path: "multiple", text: language.testing.multiple,
                    subText: language.testing.multipleText, src: multiple
                }
            ]
        };
    }
    if (type === 'practice') {
        return {
            title: language.practice.practice,
            subtypes: [
                {
                    path: "python", text: language.practice.Python,
                    subText: language.practice.PythonText, src: python,
                    link: 'https://www.programiz.com/python-programming/online-compiler/'
                },
                {
                    path: "html", text: language.practice.Html,
                    subText: language.practice.HtmlText, src: html,
                    link: 'https://www.jdoodle.com/html-css-javascript-online-editor/'
                },
                {
                    path: "sql", text: language.practice.Sql,
                    subText: language.practice.SqlText, src: sql,
                    link: 'https://products.aspose.app/cells/editor/edit?FolderName=2ee329de-4db4-44b3-80f1-5479746df38c&FileName=travel-budget.xlsx'
                },
                {
                    path: "excel", text: language.practice.Excel,
                    subText: language.practice.ExcelText, src: excel,
                    link: 'https://codebeautify.org/all-number-converter'
                },
                {
                    path: "converting", text: language.practice.Converting,
                    subText: language.practice.ConvertingText, src: converting,
                    link: 'https://www.programiz.com/sql/online-compiler/'
                }
            ]
        };
    }
    if (type === 'theory') {
        return {
            title: "Theory",
            subtypes: [
                {
                    path: "mix", text: language.theory.mix,
                    subText: language.theory.mix, src: theory
                }
            ]
        };
    }
    return null;
}

export const getRoutes = (type, language) => {
    const routes = [];
    const pages = getPages(type, language);
    routes.push({ path: "", Component: <UniversalPages content={pages} /> });
    const data = pages.subtypes;
    for (let i = 0; i < data.length; i++) {
        routes.push({
            path: data[i].path,
            Component: type === 'testing' ? <UniversalTesting /> :
                type === 'practice' ? <UniversalPractice link={data[i].link} /> :
                    type === 'theory' ? <UniversalTheory /> : <></>
        });
    }

    return routes;
}