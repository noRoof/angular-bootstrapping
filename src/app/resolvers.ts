import { ActivatedRouteSnapshot, RedirectCommand, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";
import { Example, ExampleDetails } from "./types/example";
import { inject } from "@angular/core";
import { SourceService } from "./services/source.service";
import { DataService } from "./services/data.service";
import { FacadeService } from "./services/facade.service";

export const examplesResolver: ResolveFn<Example[]> = (  route: ActivatedRouteSnapshot,  state: RouterStateSnapshot,) => {
  const facadeService = inject(FacadeService);
  const currentData = facadeService.getExamples();
  if (currentData() && currentData().length) {
    return currentData();
  } else {
    return facadeService.loadExamples();
  }
};

export const exampleResolver: ResolveFn<ExampleDetails | undefined> = (  route: ActivatedRouteSnapshot,  state: RouterStateSnapshot,) => {
  const router = inject(Router);
  const facadeService = inject(FacadeService);
  const currentData = facadeService.getExample(+route.paramMap.get('id')!);
  if (currentData()) {
    return currentData();
  } else {
    try {
      return facadeService.loadExampleDetails(+route.paramMap.get('id')!);
    } catch {
      return new RedirectCommand(router.parseUrl('/examples'));
    }
  }
};
