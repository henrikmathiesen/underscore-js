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
    */

    //
    // A template with escaped characters (without the escape syntax, markup will be rendered), also hardcoding values in two ways

    var templateEscapedVm = { foo: "<h2>TEST</h2>" };
    var templateEscaped = "<%- foo %>" + " <%- '<h3>barr</h3>'%>" + _.escape("<h3>boo</h3>");
    $('[data-template-escaped]').html(_.template(templateEscaped)(templateEscapedVm));

    //
    // A template from markup, using the games model above

    $('[data-template-from-markup]').html(_.template($('#template-from-markup').html())({ games: games }));

})();