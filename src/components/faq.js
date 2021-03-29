import React, { Component } from "react";

import "./faq.css";

class FAQ extends Component {
  render() {
    return (
      <div className="FAQ">
        <h3 className="closeTextButton" onClick={this.props.onCloseClick}>
          Close
        </h3>

        <h1>FAQ</h1>

        <h2 className="h2_FAQ">How do I get started?</h2>
        <a
          href="https://youtu.be/bJ-wX68WNHM"
          target="_blank"
          rel="noopener noreferrer"
        >
          Video tutorial
        </a>

        <h2 className="h2_FAQ">General</h2>
        <b>Why does the output change with the same image and settings?</b>
        <p className="p_FAQ">
          The JPEG decoding and scaling algorithms vary between browsers and get
          changed all the time. If you wish to be 100% sure your image stays the
          same, right click on the <i>Map preview</i> and choose{" "}
          <i>Save image as...</i>. Next time you can upload the image you saved.
        </p>

        <h2 className="h2_FAQ">Schematic</h2>
        <b>What do I do with the NBT file?</b>
        <p className="p_FAQ">Use it like a .schematic file.</p>

        <b>How can I use the NBT file?</b>
        <p className="p_FAQ">
          You can use it with programs like{" "}
          <a
            href="https://cubical.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            cubical.xyz
          </a>
          ,{" "}
          <a
            href="https://www.mcedit-unified.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MCEdit
          </a>{" "}
          and mods like{" "}
          <a
            href="https://minecraft.curseforge.com/projects/schematica"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schematica
          </a>{" "}
          /{" "}
          <a
            href="https://minecraft.curseforge.com/projects/litematica"
            target="_blank"
            rel="noopener noreferrer"
          >
            Litematica
          </a>
          . You can also import them into your game directly with a structure
          block - although it might require a redstone power source (
          <a
            href="https://github.com/rebane2001/mapartcraft/issues/100"
            target="_blank"
            rel="noopener noreferrer"
          >
            #100
          </a>
          ). It might be a better idea to use a datafile instead - it's easier
          and gives more colors.
        </p>

        <b>...but I need a .schematic file!</b>
        <p className="p_FAQ">
          Import it into{" "}
          <a
            href="https://cubical.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            cubical.xyz
          </a>{" "}
          or{" "}
          <a
            href="https://www.mcedit-unified.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MCEdit
          </a>{" "}
          and export as .schematic.{" "}
          <i>
            Note that if you're using MCEdit or Cubical, you must export the map
            as 1.12.2.
          </i>{" "}
          You do not need a .schematic file for use with Baritone; use
          Schematica and the "#schematica" command.
        </p>

        <b>But MCEdit doesn't work</b>
        <p className="p_FAQ">
          Make sure you're using{" "}
          <a
            href="https://www.mcedit-unified.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MCEdit Unified
          </a>{" "}
          and importing the NBT as a schematic, NOT loading it as a world.
          Alternatively, use Cubical.
        </p>

        <b>Why is there a row of extra blocks?</b>
        <p className="p_FAQ">
          The shade a block shows up as on the map is decided by the block North
          of it; if the Northern block is higher then a darker tone shows, else
          if the Northern block is lower then a lighter tone shows, else a
          normal tone shows. Thus an extra row of blocks (colloquially known as
          a noobline) exists at the top of a map to shade the top row properly.
        </p>

        <b>How do I align the map?</b>
        <p className="p_FAQ">
          When you have found a suitable place to build your map (eg above an
          ocean) make sure to open the map first and find the bottom left corner
          for aligning your schematic. Maps in Minecraft align to a fixed
          128x128 grid. North is always the up-direction on maps and you
          shouldn't rotate the schematic.
        </p>

        <h2 className="h2_FAQ">Datafile</h2>
        <b>What is a map.dat file?</b>
        <p className="p_FAQ">
          '.dat' is the native format Minecraft stores map data in, meaning you
          can use it to import maps into your worlds without needing to build a
          physical structure. It also enables you to use a fourth extra shade of
          color not accessible in survival.
        </p>

        <b>What do I do with the map.dat file?</b>
        <p className="p_FAQ">
          You can use the map.dat file in singleplayer or a server you own.
          Create a new map in-game, go to your world's save file, then the data
          folder and from there you can replace map_xxx.dat files.
        </p>

        <h2 className="h2_FAQ">Settings</h2>
        <b>Map size?</b>
        <p className="p_FAQ">
          This will define how many maps you will create for your picture. When
          creating bigger maps, it's recommended to split it into multiple
          schematics (lest large staircased maps stretch above the world height
          limit). This can be done with the "DOWNLOAD AS 1X1 SPLIT" button.
        </p>

        <b>My image is stretched!</b>
        <p className="p_FAQ">
          Change your map size, enable the crop option, or edit your image with
          an image editor.
        </p>

        <b>'Staircasing'?</b>
        <p className="p_FAQ">
          This will make your map 3D. Doing so will give you 3 times the colors,
          often producing a much richer mapart, but it will also make the map a
          lot harder to build, as it is not flat.
        </p>

        <b>Better color?</b>
        <p className="p_FAQ">
          This setting will give you more natural colors. Disabling this will
          make the website faster and give you slightly worse colors. It is
          recommended to keep this enabled.
        </p>

        <b>Dithering?</b>
        <p className="p_FAQ">
          This will add grain to your image to make it look a lot smoother.
          Floyd-Steinberg dithering is the most accurate, but the Ordered/Bayer
          dithering will usually have less artifacts and gives the image an
          unique style. It is usually recommended to disable dithering for
          flat-colored artwork.
        </p>

        <b>Add blocks under/Block to add?</b>
        <p className="p_FAQ">
          Here you can pick the block that will be put under either important
          blocks (eg carpets, sand, pressure plates) or all blocks. This block
          will also be used for the noobline, which cannot be disabled.
        </p>

        <b>Presets?</b>
        <p className="p_FAQ">
          You can use presets to save and load block configurations. Pick your
          blocks and click "Save" to save them as a preset, pick a preset to
          load it and click "Delete" to delete the loaded preset. It is also
          possible to share a link for your preset with others. Presets are
          Minecraft version specific.
        </p>
      </div>
    );
  }
}

export default FAQ;
