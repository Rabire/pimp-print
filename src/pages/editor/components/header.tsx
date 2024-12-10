import { Button } from "@/components/ui/button";
import { FormLabel } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { useEditorContext } from "@/stores/editor";
import { ArrowLeft, SettingsIcon } from "lucide-react";

const Header = () => {
  const { updateSettings, settings } = useEditorContext();

  return (
    <header className="px-4 py-2 border-b shadow-sm flex items-center gap-4 justify-between">
      <a
        href="/"
        className="flex gap-2 items-center text-muted-foreground hover:text-primary hover:underline"
      >
        <ArrowLeft size={16} /> Retour aux blabla
      </a>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost">
            <SettingsIcon />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="space-y-2">
          <div className="items-center gap-2 flex">
            <Switch
              checked={settings.showCutLines}
              onCheckedChange={(value) =>
                updateSettings({ showCutLines: value })
              }
            />
            <FormLabel className="!mt-0">
              Afficher la ligne de découpe (fond perdu)
            </FormLabel>
          </div>

          {/* TODO: use SwitchField x2 */}
          <div className="items-center gap-2 flex">
            <Switch
              checked={settings.showSafeArea}
              onCheckedChange={(value) =>
                updateSettings({ showSafeArea: value })
              }
            />
            <FormLabel className="!mt-0">Afficher la zone tranquille</FormLabel>
          </div>
        </PopoverContent>
      </Popover>
    </header>
  );
};

export default Header;
