export default {
    "plugins": {
        "postcss-purgecss": {
            content: ["src/**/*.html"],
            css: ["src/**/*.css"]
        }
    }
}

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


$('#calcular').click(function () {
    var deposito = $('#capital').val();
    var tna = 23 / 100;
    var duracion = $('#duracion').val();


    if (deposito != '' && tna != '' && duracion >= '30') {
        var cf = deposito * (1 + tna * (duracion / 365));
        var interes = cf - deposito;
        if (cf >= 1000) {
            $('#calc_result').text('$' + cf.toFixed(2));
            $('#calc_interes').text('$' + interes.toFixed(2));
            $('#tna').text(tna.toFixed(2) + "%");
            $('#dias').text(duracion + ' dias');
            $('#monto').text('$' + deposito);
            $('#clac_error').text('');
            $('#duracion').removeClass('danger');
            $('#capital').removeClass('danger');
        }
        else {
            $('#capital').addClass('danger');
            $('#clac_error').text('Ingrese valor mayor a $1000.');

        }

    } else {
        $('#clac_error').text('Ingrese un valor de días mayor a 30');
        $('#duracion').addClass('danger');
    }

});