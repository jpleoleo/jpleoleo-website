import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jpleoleo-website';
  data: any = {};

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('./assets/data/lional.json').subscribe({
      next: (data) => {
        //console.log(data);
        this.data = data;
      }, error: (err) => {

      }
    });
  }
  ngAfterViewInit() {
    // <script src="assets/vendor/purecounter/purecounter_vanilla.js" > </script>
    //   < script src = "assets/vendor/aos/aos.js" > </script>
    //     < script src = "assets/vendor/bootstrap/js/bootstrap.bundle.min.js" > </script>
    //       < script src = "assets/vendor/glightbox/js/glightbox.min.js" > </script>
    //         < script src = "assets/vendor/isotope-layout/isotope.pkgd.min.js" > </script>
    //           < script src = "assets/vendor/swiper/swiper-bundle.min.js" > </script>
    //             < script src = "assets/vendor/typed.js/typed.min.js" > </script>
    //               < script src = "assets/vendor/waypoints/noframework.waypoints.js" > </script>
    //                 < script src = "assets/vendor/php-email-form/validate.js" > </script>
    const urls = [
      "./assets/vendor/purecounter/purecounter_vanilla.js",
      "./assets/vendor/aos/aos.js",
      "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
      "./assets/vendor/glightbox/js/glightbox.min.js",
      "./assets/vendor/isotope-layout/isotope.pkgd.min.js",
      "./assets/vendor/swiper/swiper-bundle.min.js",
      "./assets/vendor/typed.js/typed.min.js",
      "./assets/vendor/waypoints/noframework.waypoints.js",
      "./assets/vendor/php-email-form/validate.js",
      "./assets/js/main.js"
    ]
    for (let i = 0; i < urls.length; i++) {
      const script = document.createElement('script');

      // use local file
      // script.src = 'script.js';

      script.src = urls[i];

      script.async = false;

      // make code in script to be treated as JavaScript module
      // script.type = 'module';

      script.onload = () => {
        // console.log('Script loaded successfuly');
      };

      script.onerror = () => {
        console.log('Error occurred while loading script');
      };

      document.body.appendChild(script);
    }

  }
}
