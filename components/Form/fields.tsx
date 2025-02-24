import { Payment } from "@/components/Form/Payment";
import { Checkbox } from "@/components/Form/Checkbox";
import { Country } from "@/components/Form/Country";
import { Email } from "@/components/Form/Email";
import { Message } from "@/components/Form/Message";
import { Number } from "@/components/Form/Number";
import { Select } from "@/components/Form/Select";
import { State } from "./State";
import { Text } from "@/components/Form/Text";
import { Textarea } from "@/components/Form/Textarea";

export const fields = {
  checkbox: Checkbox,
  country: Country,
  email: Email,
  message: Message,
  number: Number,
  select: Select,
  state: State,
  text: Text,
  textarea: Textarea,
  payment: Payment,
};
