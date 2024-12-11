import { Button } from "@/components/ui/button";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { useEditorContext } from "@/pages/editor/context";
import { ArrowLeft, SettingsIcon } from "lucide-react";

const Header = () => {
  const { updateSettings, settings } = useEditorContext();

  return (
    <header className="px-4 py-2 border-b shadow-sm flex items-center gap-4 justify-between">
      <a
        href="/"
        className="flex gap-2 items-center text-muted-foreground hover:text-primary hover:underline"
      >
        <ArrowLeft size={16} />
        Retour au menu principal
      </a>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost">
            <SettingsIcon />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="space-y-4">
          <FormItem className="items-center gap-2 flex">
            <FormControl>
              <Switch
                checked={settings.showCutLines}
                onCheckedChange={(value) =>
                  updateSettings({ showCutLines: value })
                }
              />
            </FormControl>

            <FormLabel className="!mt-0 leading-5">
              Afficher les lignes de découpes (fond perdu)
            </FormLabel>
          </FormItem>

          <FormItem className="items-center gap-2 flex">
            <FormControl>
              <Switch
                checked={settings.showSafeArea}
                onCheckedChange={(value) =>
                  updateSettings({ showSafeArea: value })
                }
              />
            </FormControl>
            <FormLabel className="!mt-0 leading-5">
              Afficher la zone tranquille
            </FormLabel>
          </FormItem>
        </PopoverContent>
      </Popover>
    </header>
  );
};

export default Header;
