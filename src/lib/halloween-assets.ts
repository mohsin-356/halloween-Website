/**
 * Halloween asset registry.
 * Every decorative asset is CDN-hosted and mapped to an explicit UI role so
 * artwork is used intentionally rather than scattered around the interface.
 */
import batsGroup from "@/assets/halloween/bats-group.png.asset.json";
import broom from "@/assets/halloween/broom.png.asset.json";
import btnOrnate from "@/assets/halloween/btn-readmore-ornate.png.asset.json";
import btnWeb from "@/assets/halloween/btn-readmore-web.png.asset.json";
import candles from "@/assets/halloween/candles.png.asset.json";
import cat from "@/assets/halloween/cat.png.asset.json";
import cauldron from "@/assets/halloween/cauldron.png.asset.json";
import cloudDark from "@/assets/halloween/cloud-dark-1.png.asset.json";
import cloudEmber1 from "@/assets/halloween/cloud-ember-1.png.asset.json";
import cloudEmber2 from "@/assets/halloween/cloud-ember-2.png.asset.json";
import crosses from "@/assets/halloween/crosses.png.asset.json";
import ghost from "@/assets/halloween/ghost.png.asset.json";
import graveyardRow from "@/assets/halloween/graveyard-row.png.asset.json";
import graveyardScene from "@/assets/halloween/graveyard-scene.png.asset.json";
import heroBg from "@/assets/halloween/hero-bg.jpg.asset.json";
import houseBig from "@/assets/halloween/house-big.png.asset.json";
import houseMoon from "@/assets/halloween/house-moon.png.asset.json";
import lantern from "@/assets/halloween/lantern.png.asset.json";
import leaves from "@/assets/halloween/leaves.png.asset.json";
import owl from "@/assets/halloween/owl.png.asset.json";
import pumpkinHero from "@/assets/halloween/pumpkin-hero.png.asset.json";
import pumpkinLights from "@/assets/halloween/pumpkin-lights.png.asset.json";
import pumpkinWitchHat from "@/assets/halloween/pumpkin-witch-hat.png.asset.json";
import scarecrow from "@/assets/halloween/scarecrow.png.asset.json";
import tree from "@/assets/halloween/tree.png.asset.json";
import web1 from "@/assets/halloween/web-1.png.asset.json";
import web2 from "@/assets/halloween/web-2.png.asset.json";

export const HALLOWEEN = {
  hero: {
    sky: heroBg.url,
    moonHouse: houseMoon.url,
    pumpkin: pumpkinHero.url,
    scarecrow: scarecrow.url,
  },
  clouds: {
    dark: cloudDark.url,
    ember: cloudEmber1.url,
    gold: cloudEmber2.url,
  },
  pumpkins: {
    glowing: pumpkinHero.url,
    witchHat: pumpkinWitchHat.url,
    lights: pumpkinLights.url,
  },
  characters: {
    scarecrow: scarecrow.url,
    ghost: ghost.url,
    cat: cat.url,
    owl: owl.url,
  },
  structures: {
    hauntedHouse: houseBig.url,
    houseMoon: houseMoon.url,
    graveyard: graveyardScene.url,
    graveyardRow: graveyardRow.url,
    tombstones: crosses.url,
    tree: tree.url,
  },
  props: {
    candles: candles.url,
    lantern: lantern.url,
    cauldron: cauldron.url,
    broom: broom.url,
    leaves: leaves.url,
  },
  webs: { a: web1.url, b: web2.url },
  bats: batsGroup.url,
  buttons: { ornate: btnOrnate.url, web: btnWeb.url },
} as const;

export type HalloweenAssetUrl = string;
