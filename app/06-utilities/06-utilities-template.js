/// <reference path="../../typings/tsd.d.ts" />

(function () {

    //
    // Simple template first try

    var simpleData = {
        name: "Adam",
        age: 50
    };

    var simpleTemplate = _.template("<%= name %> is <%= age %> years old");
    var simpleTemplateCompiled = simpleTemplate(simpleData);

    $('[data-simple-template]').html(simpleTemplateCompiled);

    //
    // Simple template more compact syntax

    var myVm = {
        name: "Bertil"
    };

    var simpleTemplateCompactSyntax = _.template("<%= name %>")(myVm);
    $('[data-simple-template-compact-syntax]').html(simpleTemplateCompactSyntax);

    //
    // A template with a loop

    var games = [
        {
            name: "Stellaris",
            rating: 8
        },
        {
            name: "Civilization 4",
            rating: 9
        },
        {
            name: "Sim City 2000",
            rating: 7
        }
    ];

    var templateLoop = [
        '<ul>',
            '<% _.each(games, function(game){ %>',
                '<li><%= game.name %></li>',
            '<%})%>',
        '</ul>'
    ].join('');

    // Note to self: VM MUST BE AN OBJECT
    $('[data-template-with-loop]').html(_.template(templateLoop)({ games: games }));

    /*
        IMPORTANT
            For performance reasons, if using a template over and over again, dont run the compile process every time
            Instead store the compiled template in a variable and reuse it
            var compiledTemplate = _.template(templateLoop)({ games: games })
            Or for reuse with different data: var template = _.template(templateLoop); template(vm); template(vmToo);
    */

    //
    // A template with escaped characters (without the escape syntax, markup will be rendered), also hardcoding values in two ways

    var templateEscapedVm = { foo: "<h2>TEST</h2>" };
    var templateEscaped = "<%- foo %>" + " <%- '<h3>barr</h3>'%>" + _.escape("<h3>boo</h3>");
    $('[data-template-escaped]').html(_.template(templateEscaped)(templateEscapedVm));

    //
    // A template from markup, using the games model above

    $('[data-template-from-markup]').html(_.template($('#template-from-markup').html())({ games: games }));

    //
    //
    // =============================================================================================================================================
    //
    //
    // A note about increasing performance (only worth it if working with really large data sets)
    // - We can change the scope that is found within the template
    // - By default, the passed in object is the object for the template
    // - We can however create our own scope ...

    // default
    var templateLocalScope = [
        '<ul>',
            '<% _.each(books, function(book){ %>',
                '<li><%= book.title %></li>',
            '<%})%>',
        '</ul>'
    ].join('');

    // variable scope
    var templateVariableScope = [
        '<ul>',
            '<% _.each(data.books, function(book){ %>',
                '<li><%= book.title %></li>',
            '<%})%>',
        '</ul>'
    ].join('');

    // vm
    var books = [
        {
            title: "A"
        },
        {
            title: "B"
        },
        {
            title: "C"
        }
    ];

    // default
    $('[data-template-local-scope]').html(_.template(templateLocalScope)({ books: books }));

    // Pluralsight teacher says this is a performance boost when dealing with large data sets
    var settings = { variable: 'data' };
    $('[data-template-variable-scope]').html(_.template(templateVariableScope, settings)({ books: books }));

})();